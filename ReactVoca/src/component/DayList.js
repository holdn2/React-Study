import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  // const [days, setDays] = useState([]);
  // const [count, setCount] = useState(0);
  // useEffect() : 어떤 상태값이 바뀌었을 때 동작하는 함수 작성 가능.
  // 상태값 바뀔 때마다 호출

  // useEffect(() => {
  //   // API 비동기통신
  //   fetch(`http://localhost:3001/days`)
  //     .then((res) => {
  //       return res.json(); //json으로 응답 변환.
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []); //한번만 호출하려면 매개변수로 빈배열을 준다. 랜더링 직후 한번만 실행.

  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}

// function onClick() {
//   setCount(count + 1);
// }
// function onClick2() {
//   setDays([
//     ...days,
//     {
//       id: Math.random(),
//       day: 1,
//     },
//   ]);
// }

// useEffect(() => {
//   console.log("Count Change");
// }, [count]); //count가 변경될 때마다 useEffect내의 함수 실행.
// useEffect(() => {
//   console.log("Day Change");
// }, [days]);
