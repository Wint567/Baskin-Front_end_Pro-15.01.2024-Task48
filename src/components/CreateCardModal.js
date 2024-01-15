import {useState} from "react";
import axios from "axios";
import {getData, setDataToMockAPI} from "../api/api";

const CreateCardModal = ({showModal, toggleModal, setData, updateData}) => {
    const [title, setTitle] = useState('');
    const [message, setMassage] = useState('');
    const [image, setImage] = useState('');

    const handleSetDataToLocalState = () => {
        setData({title, message, image})
    }

    const handleSetDataToMockApiAndGetUpdateData = async (title, message, image) => {
        await setDataToMockAPI(title, message, image)
        const updatedData = await getData();
        updateData(updatedData);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const isValid = await isValidImageUrl(image);

        if (!isValid) {
            alert('Incorrect image link');
            return;
        }

        if (!title || !message || !image) {
            alert('Please fill in all fields');
        } else {
                await handleSetDataToMockApiAndGetUpdateData(title, message, image)
                handleSetDataToLocalState()
                toggleModal();

                setTitle('');
                setMassage('');
                setImage('');
        }
    }

    const isValidImageUrl = async (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;

            img.onload = () => {
                resolve(true);
            };

            img.onerror = () => {
                resolve(false);
            };
        });
    };


    return(
       <div className={`modal ${showModal ? 'show' : ''}`}>
           <div className="modal-content">
               <span className="close" onClick={toggleModal}>
                   &times;
               </span>
               <form onSubmit={handleFormSubmit}>
                   <label>Title:</label>
                   <input type="text" value={title}
                          onChange={(e) =>  setTitle(e.target.value)} />

                   <label>Message:</label>
                   <textarea value={message}
                             onChange={(e) => setMassage(e.target.value)} />

                   <label>Image URL:</label>
                   <input type="text" value={image}
                          onChange={(e) => setImage(e.target.value)}/>

                   <button type="submit">Create Card</button>
               </form>
           </div>
       </div>
    )
}

export default CreateCardModal;