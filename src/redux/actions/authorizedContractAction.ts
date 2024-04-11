import { db } from '../../firebase';
import { IAuthorizedContract } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

export const getIAuthorizedContracts = async (): Promise<IAuthorizedContract[]> => {
  try {
    const data: IAuthorizedContract[] = [];

    const q = query(
      collection(db, "authorized-contract")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IAuthorizedContract);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getIAuthorizedContractById = async (id: string): Promise<IAuthorizedContract | null> => {
  try {
    const docRef = doc(db, 'authorized-contract', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IAuthorizedContract;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting contract by ID:', error);
    return null;
  }
};
