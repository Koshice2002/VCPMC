import { db } from '../../firebase';
import { IPlaylist, IAuthorizedSong } from "../../types";
import { collection, query, getDocs, doc, getDoc, where } from 'firebase/firestore';
import { getIAuthorizedSongById } from './songAction';

export const getIPlaylist= async (): Promise<IPlaylist[]> => {
  try {
    const data: IPlaylist[] = [];

    const q = query(
      collection(db, "playlist")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IPlaylist);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getIPlaylistById = async (id: string): Promise<IPlaylist | null> => {
  try {
    const docRef = doc(db, 'playlist', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IPlaylist;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting playlist by ID:', error);
    return null;
  }
};

export const fetchSongsForPlaylist = async (playlistId: string): Promise<IAuthorizedSong[]> => {
    try {
        // Fetch the playlist by its ID to get the list of song IDs associated with it
        const playlist = await getIPlaylistById(playlistId);
        if (!playlist) {
            throw new Error('Playlist not found');
        }

        const { songs } = playlist;

        if (!songs || songs.length === 0) {
            return []; // Return an empty array if the playlist has no songs
        }

        // Fetch the song data for each song ID in the playlist
        const songPromises = songs.map(songId => getIAuthorizedSongById(songId));
        const songDataArray = await Promise.all(songPromises);

        // Filter out null values (songs not found) and return the song data array
        return songDataArray.filter((songData): songData is IAuthorizedSong => !!songData);
    } catch (error) {
        console.error('Error fetching songs for playlist:', error);
        throw error;
    }
};
