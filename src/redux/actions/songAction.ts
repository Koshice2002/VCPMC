import { db } from '../../firebase';
import { IAuthorizedSong } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

export const getIAuthorizedSongs = async (): Promise<IAuthorizedSong[]> => {
  try {
    const data: IAuthorizedSong[] = [];

    const q = query(
      collection(db, "authorized-song")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IAuthorizedSong);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getIAuthorizedSongById = async (id: string): Promise<IAuthorizedSong | null> => {
  try {
    const docRef = doc(db, 'authorized-song', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IAuthorizedSong;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting song by ID:', error);
    return null;
  }
};
