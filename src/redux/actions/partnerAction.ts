import { db } from '../../firebase';
import { IPartner } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

export const getIPartners = async (): Promise<IPartner[]> => {
  try {
    const data: IPartner[] = [];

    const q = query(
      collection(db, "partner-authorized")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IPartner);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getIPartnerById = async (id: string): Promise<IPartner | null> => {
  try {
    const docRef = doc(db, 'partner-authorized', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IPartner;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting partner by ID:', error);
    return null;
  }
};
