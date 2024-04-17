import { db } from '../../firebase';
import { IDevice } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

export const getIDevices = async (): Promise<IDevice[]> => {
  try {
    const data: IDevice[] = [];

    const q = query(
      collection(db, "device")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IDevice);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getIDeviceById = async (id: string): Promise<IDevice | null> => {
  try {
    const docRef = doc(db, 'device', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IDevice;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting device by ID:', error);
    return null;
  }
};
