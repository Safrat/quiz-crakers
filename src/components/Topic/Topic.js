import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Topic = () => {
    const topic = useLoaderData()
    console.log(topic.data.questions);
    console.log(topic);
    const notify = (answer) => toast(answer);
    const check = (chk, answer) => {
        if(chk===answer){
            toast("Right Answer!!!!")
        }
        else{
            toast("Wrong Answer!!!")
        }
    }
    return (
        <div>
            <h1>Question of {topic.data.name}</h1>
            <div className='container'>
                <div>
                    {
                        topic.data.questions.map(question => <div key={question.id}>
                            <div><p>Question: {question.question}</p> <button onClick={()=>notify(question.correctAnswer)} type="button" className="btn btn-primary" id="liveToastBtn"><AiFillEye></AiFillEye></button>
                                <ToastContainer />

                                <div>
                                    {
                                        question.options.map(option => <div key={option}>
                                            <div className="form-check">
                                                <input onClick={()=>check(option, question.correctAnswer)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    {option}
                                                </label>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topic;