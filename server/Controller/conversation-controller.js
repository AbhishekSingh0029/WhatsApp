import Conservation from "../Model/Conversation.js";


export const newConversation= async(request,response) =>{
    try{
        const senderId =request.body.senderId;
        const receiverId=request.body.receiverId;
        
       const exist =await Conservation.findOne({members : { $all:[receiverId, senderId]  }});
       if(exist){
        return response.status(200).json('conversation  already exists ');
       }

       const newConversation =new Conservation({
        members:[senderId,receiverId]
       })
       
       
       await newConversation.save();
       return response.status(200).json('conversation saved successfully');
    }
    catch(error){
        return response.status(500).json(error.message);
    }
}


export const getConversation = async(request,response)=>{
    try{
        const receiverId =request.body.receiverId;
        const senderId =request.body.senderId;
       let conversation=  await Conservation.findOne({members : { $all:[receiverId, senderId]  }})
       return response.status(200).json(conversation);
    }
    catch(error){ 
        return response.status(500).json(error.message);
    }
}