import { firestore } from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';

export default async function handler(req: any, res: any) {
  const { imageUrl } = req.body;

  await addDoc(collection(firestore, 'imgs'), {
    imgUrl: imageUrl,
    createdAt: new Date(),
  });

  res.status(200).json({ name: 'John Doe' });
}
