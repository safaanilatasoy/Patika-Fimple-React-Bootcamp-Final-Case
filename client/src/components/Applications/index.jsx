import style from "./style.module.css";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection} from "firebase/firestore";
import {firestoreDB} from "../../firebase";

function Applications() {
    const ref = collection(firestoreDB,"applications");
    const [data, isLoading] = useCollectionData(ref);

    if(isLoading) {
        return <h3 className={style.h1a}>Yükleniyor</h3>
    }
    console.log(data);
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
        {data.map((application,key) => (
          <tr key={key} id={application.id}>
            <td>{application.name}</td>
            <td>01.01.2024</td>
            <td>{application.isAnswered === true ? "Cevaplandı" : "Cevap Bekliyor"}</td>
            <td><button>Sil</button><button>Detay</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Applications
