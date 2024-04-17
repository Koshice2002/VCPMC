import { db } from '../../firebase';
import { IUnitUsed } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

export const getIUnitUsed = async (): Promise<IUnitUsed[]> => {
  try {
    const data: IUnitUsed[] = [];

    const q = query(
      collection(db, "unit-used")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IUnitUsed);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getUnitUsedById = async (id: string): Promise<IUnitUsed | null> => {
  try {
    const docRef = doc(db, 'unit-used', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IUnitUsed;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting unit used by ID:', error);
    return null;
  }
};
