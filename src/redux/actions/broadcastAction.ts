import { db } from '../../firebase';
import { IBroadcast, IPlaylist } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';
import { getIPlaylistById } from './playlistAction';

export const getIBroadcast= async (): Promise<IBroadcast[]> => {
  try {
    const data: IBroadcast[] = [];

    const q = query(
      collection(db, "broadcast")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IBroadcast);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getIBroadcastById = async (id: string): Promise<IBroadcast | null> => {
  try {
    const docRef = doc(db, 'broadcast', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IBroadcast;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting broadcast by ID:', error);
    return null;
  }
};

export const fetchPlaylistForBroadcast = async (broadcastId: string): Promise<IPlaylist[]> => {
    try {
        // Fetch the playlist by its ID to get the list of song IDs associated with it
        const broadcast = await getIBroadcastById(broadcastId);
        if (!broadcast) {
            throw new Error('Playlist not found');
        }

        const { playlist } = broadcast;

        if (!playlist || playlist.length === 0) {
            return []; // Return an empty array if the playlist has no songs
        }

        // Fetch the song data for each song ID in the playlist
        const playlistPromises = playlist.map(songId => getIPlaylistById(songId));
        const playlistDataArray = await Promise.all(playlistPromises);

        // Filter out null values (songs not found) and return the song data array
        return playlistDataArray.filter((playlistData): playlistData is IBroadcast => !!playlistData);
    } catch (error) {
        console.error('Error fetching songs for playlist:', error);
        throw error;
    }
};


