import { collection, addDoc, setDoc, doc, set } from 'firebase/firestore'
import db from './firebase'
import { writeBatch } from 'firebase/firestore'
import malazanBooks from './data/testData';

var batch = writeBatch(db)

malazanBooks.forEach(series => {
  series.books.forEach(book => {
    if (book.sections) {
      book.sections.forEach(async section => {
        const docRef = doc(db, 'sections', book.name);
        await batch.set(docRef, {
          sections: sections.map(section => ({
            id: section.id,
            name: section.name || null,
            chapters: section.chapters.map((chapter, i) => ({
              id: typeof chapter === 'number' ? chapter : i + 1,
              name: typeof chapter === 'number' ? `Chapter ${chapter}` : `${chapter}`
            }))
          }))
        })
        batch.commit();
      })
    } else {
      console.log(book.name)
    }
  })
})
