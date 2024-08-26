import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Word from "./Word";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Day() {
  //dummy.words
  // // const wordList = dummy.words.filter((word) => word.day === Number(day));
  // const [words, setWords] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  const day = useParams().day;
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  const history = useHistory();

  async function delDay() {
    if (window.confirm("삭제 하시겠습니까?")) {
      try {
        // words의 각 항목을 삭제
        for (const word of words) {
          await fetch(`http://localhost:3001/words/${word.id}`, {
            method: "DELETE",
          });
        }

        // days에서 해당 day 삭제
        const daysResponse = await fetch(
          `http://localhost:3001/days?day=${day}`
        );
        const days = await daysResponse.json();

        for (const dayItem of days) {
          await fetch(`http://localhost:3001/days/${dayItem.id}`, {
            method: "DELETE",
          });
        }

        alert("삭제가 완료되었습니다.");
        history.push(`/`);
      } catch (err) {
        console.error("에러 발생:", err);
        alert("삭제 중 에러가 발생했습니다.");
      }
    }
  }

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        {words.map((word) => (
          <Word word={word} key={word.id} />
        ))}
      </table>

      <button onClick={delDay} className="btn_del" style={{ marginTop: 20 }}>
        이 Day 삭제
      </button>
      <div>
        <button style={{ marginRight: 10 }}>
          <Link to={`/day/${String(Number(day) - 1)}`}>전날</Link>
        </button>
        <button>
          <Link to={`/day/${String(Number(day) + 1)}`}>다음날</Link>
        </button>
      </div>
    </>
  );
}
