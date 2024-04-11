import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const loginApi = async (email: string, password: string, role: string) => {
    try {
        // Query the 'users' collection in Firestore
        const q = query(
            collection(db, 'users'),
            where('email', '==', email),
            where('password', '==', password),
            where('role', '==', role)
        );
        const snapshot = await getDocs(q);

        // Check if a user document with the provided credentials exists
        if (snapshot.empty) {
            throw new Error('Invalid email or password');
        }

        // Extract user data from the document
        const userData = snapshot.docs[0].data();

        // Check if the role matches the provided role
        if (userData.role !== role) {
            throw new Error('Wrong Role');
        }

        // Return user data if the role is valid
        return userData;
    } catch (error: any) {
        throw new Error('Authentication failed: ' + error.message);
    }
};  

