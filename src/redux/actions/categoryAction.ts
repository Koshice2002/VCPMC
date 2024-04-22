import { db } from '../../firebase';
import { ICategory } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

export const getICategorys = async (): Promise<ICategory[]> => {
  try {
    const data: ICategory[] = [];

    const q = query(
      collection(db, "category")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as ICategory);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getICategoryById = async (id: string): Promise<ICategory | null> => {
  try {
    const docRef = doc(db, 'category', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as ICategory;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting category by ID:', error);
    return null;
  }
};
