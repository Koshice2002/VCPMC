import { db } from '../../firebase';
import { IRole } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

export const getIRoles = async (): Promise<IRole[]> => {
  try {
    const data: IRole[] = [];

    const q = query(
      collection(db, "role")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IRole);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getIRoleById = async (id: string): Promise<IRole | null> => {
  try {
    const docRef = doc(db, 'role', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IRole;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting role by ID:', error);
    return null;
  }
};
