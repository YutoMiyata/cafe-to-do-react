import React, { useState } from 'react'
import "./ToDo.css";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import TableBarIcon from '@mui/icons-material/TableBar';

const ToDo = () => {
    // state
    const [inputText,setInputText] = useState('')
    const [unCompleteText,setUnCompleteText] = useState(['皿洗い','レタス仕込み','コーヒー豆仕込み'])
    const [checkText,setCheckText] = useState([])
    const [completeText,setCompleteText] = useState([])


    // function//////////////////////////////////////////////////////////////////

    //      input      /////////////////////////////////////////////////////
    const onChangeInput = (e) => {
        return setInputText(e.target.value)
    }

    const onClickUnComplete = () => {
        const newUncompleteTask = [...unCompleteText,inputText]
        setUnCompleteText(newUncompleteTask)
        setInputText('')
    }

    ///   uncomplete  function ////////////////////////////////////////////////////

    const onClickToCheck = (index) => {
        const newToCheckTask = [...unCompleteText]
        newToCheckTask.splice(index,1)
        setUnCompleteText(newToCheckTask)

        const newCheckTask = [...checkText,unCompleteText[index]]
        setCheckText(newCheckTask)
    }

    const onClickDeleteFromUnComplete = (index) => {
        const newToDoTask =[...unCompleteText]
        newToDoTask.splice(index,1)
        setUnCompleteText(newToDoTask)
    }

    ////////////check function ///////////////////////////////////////
    const onClickOk = (index) => {
        const newCheckTask = [...checkText];
        newCheckTask.splice(index, 1);
        setCheckText(newCheckTask)
        
        const newCompleteTask = [...completeText,checkText[index]]
        setCompleteText(newCompleteTask);
    
    }

    const onClickBack = (index) => {
        const newCheckTask = [...checkText];
        newCheckTask.splice(index,1)
        setCheckText(newCheckTask)

        const newUnCompleteTask = [...unCompleteText,checkText[index]]
        setUnCompleteText(newUnCompleteTask)
    }
    
    ////////////complte function ///////////////////////////////////////
    const completeDelete = (index) => {
        const newCompleteTask = [...completeText]
        newCompleteTask.splice(index,1);
        setCompleteText(newCompleteTask)
    }

    return (
    <div className='cafeBlock'>
        <div className='title'>
            <LocalCafeIcon fontSize="large" />
            <h1>カフェToDoシステム</h1>
            <TableBarIcon fontSize="large"  />        
        </div>

        <div className='toDoInput'>
            <input placeholder='本日の仕事を入力' onChange = {onChangeInput} value={ inputText }/>
            <button onClick={ onClickUnComplete }>追加</button>
        </div>

        <div className='unCompleteTask'>
            <h3>本日の仕事(未完了)</h3>
            {unCompleteText.map((unComplete,index) => {
                return (
                    <div className='unComleteTaskContent'>
                        <p>{ unComplete }</p>
                        <div className='unCompleteToDoButton'>
                            <button onClick = {() => onClickToCheck(index)}>完了</button>
                            <button onClick = {() => onClickDeleteFromUnComplete(index)}>削除</button>
                        </div>                
                    </div>
                )
            })}
        </div>

        <div className='checkTask'>
            <h3>店長・リーダーのチェック</h3>
            {checkText.map((checktask,index) => {
                return (
                    <div className='unComleteTaskContent'>
                        <p>{ checktask }</p>
                        <div className='unCompleteToDoButton'>
                            <button onClick={() => onClickOk(index)}>OK</button>
                            <button onClick = {() => onClickBack(index)}>BACK</button>
                        </div>                
                    </div>
                )
            })}
        </div>

        <div className='completeTask'>
            <h3>終了・完了</h3>
            {completeText.map((complete,index) => {
                return (
                    <div className='unComleteTaskContent'>
                        <p>{ complete }</p>
                        <div className='unCompleteToDoButton'>
                            <button onClick={() => {completeDelete(index)}}>削除</button>
                        </div>                
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ToDo
