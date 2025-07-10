import React, { useState } from "react";
import PrevButton from "../components/PrevButton";
import InfoInput from "../components/InfoInput";
import AddButton from "../components/AddButton";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Info = () => {
  // logic

  const history = useNavigate();

  // TODO: set함수 추가하기
  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록

  const addIngredient = () => {
    console.log("재료 추가하기");

    const id = Date.now(); // 고유 id 생성

    const newItem = {
      id,
      label: `ingredient_${id}`,
      text: "재료명",
      value: "", // 사용자가 입력할 값
    };

    // 상태 업데이트 시, ingredientList에 새 항목 추가
    setIngredientList((prev) => [...prev, newItem]); // ingredientList에 새 항목 추가
  };

  // 입력값 변경 함수
  const handleIngredientChange = (id, newValue) => {
    setIngredientList((prev) =>
      prev.map(
        (item) => (item.id === id ? { ...item, value: newValue } : item) // 해당 항목의 value 업데이트
      )
    );
  };

  // 재료 삭제 함수
  const handleRemoveIngredient = (id) => {
    setIngredientList((prev) => prev.filter((item) => item.id !== id)); // 해당 id를 가진 항목 삭제
  };

  // chat 페이지로 이동
  const handleNext = () => {
    history("/chat");
  };

  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-104"></i>
      <PrevButton />
      <div className="h-full flex flex-col">
        <div className="px-2 pt-6">
          <h1 className="text-4.5xl font-black text-white">
            당신의 냉장고를 알려주세요
          </h1>
        </div>

        <div className="mt-20 overflow-auto">
          <form>
            <div>
              {ingredientList.map((item) => (
                <InfoInput
                  key={item.id}
                  content={item}
                  onRemove={handleRemoveIngredient} // 삭제 처리 함수 전달
                  onChange={handleIngredientChange} // 입력값 변경 함수
                />
              ))}
            </div>
          </form>
        </div>
        {/* 사용자가 입력한값을 넘겨주는거 */}
        <div className="mt-6">
          <AddButton onClick={addIngredient} />
        </div>

        <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Info;

//     // 상태 업데이트 시, ingredientList에 새 항목 추가
//     setIngredientList((prev) => [...prev, newItem]); // ingredientList에 새 항목 추가
//   };

//   const handleNext = () => {
//     // console.log("chat페이지로 이동");
//     history("/chat");
//   };

// const handleRomove = (selectedId) => {
// console.log("🚀 ~ handleRomove ~ selectedId:", selectedId);
// const filterList = ingredientList.filter((ingredient) => () )
// };

//   // view
//   return (
//     <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
//       <i className="w-168 h-168 rounded-full bg-chef-green-500 fixed -z-10 -left-60 -top-104"></i>
//       {/* START:뒤로가기 버튼 */}
//       <PrevButton />
//       {/* END:뒤로가기 버튼 */}
//       <div className="h-full flex flex-col">
//         {/* TODO:Title 컴포넌트 */}
//         <div className="px-2 pt-6">
//           <h1 className="text-4.5xl font-black text-white">
//             당신의 냉장고를 알려주세요
//           </h1>
//         </div>
//         {/* // TODO:Title 컴포넌트 */}

//         {/* START:form 영역 */}
//         <div className="mt-20 overflow-auto">
//           <form>
//             {/* START:input 영역 */}
//             <div>
//               {ingredientList.map((item) => (
//                 <InfoInput key={item.id} content={item} />
//               ))}
//             </div>
//             {/* END:input 영역 */}
//           </form>
//         </div>
//         {/* END:form 영역 */}
//         {/* START:Add 재료추가 button 영역 */}
//         <AddButton onClick={addIngredient} />
//         {/* END:Add button 영역 */}
//         {/* START:Button 영역 */}
//         <Button text="Next" color="bg-chef-green-500" onClick={handleNext} />
//         {/* END:Button 영역 */}
//       </div>
//     </div>
//   );
// };

// export default Info;
