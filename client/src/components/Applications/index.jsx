import style from "./style.module.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../../firebase";

function Applications() {
  const ref = collection(firestoreDB, "applications");
  const [data, isLoading] = useCollectionData(ref);
  

  if (isLoading) {
    return <h4 className={style.loadingScreen}>Yükleniyor...</h4>;
  }

const handleDelete = async (id) => {
  console.log("Silinecek Belge ID:", id);

  try {
    const docRef = doc(firestoreDB, "applications", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      await deleteDoc(docRef);
    } else {
      console.error("Silme için geçersiz ID veya belge bulunamadı.");
    }
  } catch (error) {
    console.error("Belge silme hatası: ", error);
  }
};


  return (
    <table className={style.applicationTable}>
      <thead>
        <tr>
          <th>Başvuru yapan</th>
          <th>Tarih</th>
          <th>Durum</th>
          <th>İşlem</th>
        </tr>
      </thead>
      <tbody>
        {data.map((application, key) => (
          <tr key={key} id={application.id}>
            <td>{application.name}</td>
            <td>01.01.2024</td>
            <td>{application.isAnswered === true ? "Cevaplandı" : "Cevap Bekliyor"}</td>
            <td className={style.buttonContainer}>
              <button
                className={style.deleteButton}
               onClick={() => handleDelete(application.id)}
              >
                Sil
              </button>
              <button className={style.detailsButton}>Detay</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Applications;
