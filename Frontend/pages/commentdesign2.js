import Image from "next/image";
import { useEffect, useState,useCallback } from "react";
import Dot from "@/components/Dot";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Link from "next/link";
import { BASE_URL ,API_VERSION } from '@/config';
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import moment from 'moment';
import { redirect } from "next/dist/server/api-utils";


const Submitdesgin = ()=>{

    const [dot, setDot] = useState(null);
    const [IDCom, setIDCom]= useState(1);
    const [CommentText, setCommentText] = useState('');
    const [CommentText2, setCommentText2] = useState('');
    const [Comment, setComment] = useState([{id:1,point:{x:47.203125,y:493},text:"yo yo",AccountName:'Osama',AccountType:"Client"}]);
    const [EditedComment, setEditedComment] = useState('');
    const [EditedCommentOpen, setEditedCommentOpen] = useState(false);
    const [IsHovering, setIsHovering] = useState(true);
    const [IsHoveringDot, setIsHoveringDot] = useState(false);
    const [IsHoveringID, setIsHoveringID] = useState(null);
    const [DotColor, setDotColor] = useState('#FF6B6B');
    const [AccountName, setAccountName] = useState('Osama');
    const [AccountType, setAccountType] = useState('Client');
    const DotColor2="blue";

    const csrfToken = Cookies.get('csrfToken');


    const router = useRouter();
    // useEffect(() => {
    //     if(router.isReady){
    //         const { id } = router.query;
    //         if (!id) return null;
    //         fetch(`${BASE_URL}/${API_VERSION}/project/${router.query.id}/comments/`, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-CSRFToken': csrfToken,
    //               },
    //               credentials:"include",
    //         })
    //         .then(response => {return response.json()})
    //         .then(data => {setComment(data.results);console.log(data);console.log(Comment)})
    //         .catch(error => console.error(error));
    //      }
    // }, [router.isReady]);
    // console.log(router.query.id);
    // useEffect(()=>{
    //   if(!csrfToken){
    //     // window.location.href = '/login';
    //   }
    //     fetch(`${BASE_URL}/${API_VERSION}/project/${router.query.id}/comments/`, {

    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-CSRFToken': csrfToken,
    //           },
    //           credentials:"include",

    //     })
    //   .then(response => {return response.json()})
    //   .then(data => {setComment(data.results);console.log(data);console.log(Comment)})
    //   .catch(error => console.error(error));


    // },[])

    const GetComments = ()=>{
        fetch(`${BASE_URL}/${API_VERSION}/project/${router.query.id}/comments/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
              },
              credentials:"include",

        })
      .then(response => {return response.json()})
      .then(data => {console.log(data)})
      .catch(error => console.error(error));
    }
    function handleMouseEnter(id) {
        setIsHovering(true);
        setIsHoveringID(id)
        // console.log(IsHovering)
        console.log(IsHoveringID)
        console.log(IDCom)
      }

      function handleMouseLeave() {
        setIsHovering(false);

      }
      function handleMouseEnterDot(id) {
        // console.log("yo")
        setIsHoveringDot(true);
        setIsHoveringID(id)
        // console.log(IsHovering)
        console.log(IsHoveringID)
        console.log(IDCom)
      }

      function handleMouseLeaveDot() {
        setIsHovering(false);

      }


    const handleDrawClick = (event)=>{
        const rect = event.target.getBoundingClientRect();
        // const x = event.clientX - rect.left;
        // const y = event.clientY - rect.top;
        //////////////////////////////////////
        // const x = event.screenX - rect.left;
        // const y = event.screenY - rect.top;
        //////////////////////////////////////
        const x = event.pageX - rect.left;
        const y = event.pageY - rect.top;
        setDot({ x, y });
        console.log(rect)
        console.log(dot)
        // return <Dot x={x} y={y} />
        setEditedCommentOpen(false);
        setEditedComment("");
    }
    const handleSubmit= ()=>{
        if(CommentText!=""&dot!=null)
        {
            console.log(csrfToken);
            const x=dot.x;
            const y=dot.y;
            const comment=CommentText;
            const parent=null;
            const formData = {x,y,comment,parent};
            console.log(formData)
            fetch(`${BASE_URL}/${API_VERSION}/project/${router.query.id}/comments/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                  },
                  credentials:"include",
                  body: JSON.stringify(formData)
            })
          .then(response => {return response.json()})
          .then(data => {setComment([data,...Comment]);console.log(data)})
          .catch(error => console.error(error));

            // setComment([...Comment ,{id:IDCom+1,point:dot,text:CommentText,AccountName:AccountName,AccountType:AccountType}])
            // // console.log(Comment)
            // setDot(null);
            // setCommentText('');
            // setIDCom(IDCom+1);

        }
        else{
            console.log("please write a comment and choose a point")
        }
    }
    const handleSubmit2= ()=>{

        if(CommentText2!="")
        {
            console.log(csrfToken);
            const x=0;
            const y=0;
            const comment=CommentText2;
            const parent=null;
            const formData = {x,y,comment,parent};
            console.log(formData)
            fetch(`${BASE_URL}/${API_VERSION}/project/${router.query.id}/comments/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                  },
                  credentials:"include",
                  body: JSON.stringify(formData)
            })
          .then(response => {return response.json()})
          .then(data => {setComment([data,...Comment]);console.log(data)})
          .catch(error => console.error(error));
        }
        else{
            console.log("please write a comment")
        }
        // setComment([...Comment ,{id:IDCom+1,point:undefined,text:CommentText2,AccountName:AccountName,AccountType:AccountType}])
            // // console.log(Comment)
            // setDot(null);
            // setCommentText2('');
            // setIDCom(IDCom+1);


    }
    const handleDotClick=()=>{
        console.log("yes")
        setEditedCommentOpen(!EditedCommentOpen)
        setDot(null);
    }
    function EditButton(OldComm,id){
        var text = document.getElementById("CommentEdit");
        const textBody = document.getElementById("CommentBody");
        const EditButton = document.getElementById("EditButton");
        const UpdateButton = document.getElementById("UpdateButton");
        // if (text.style.display === "none") {
        console.log(text.style.display);
      if (EditedComment==="") {
        text.style.display = "block";
        textBody.style.display = "none";
        setEditedComment(OldComm);
        // UpdateButton.style.display = "block";
        // EditButton.style.display = "none";
      } else {
        text.style.display = "none";
        textBody.style.display = "flex";
        EditComment(id)
        setEditedComment("");
        // UpdateButton.style.display = "none";
        // EditButton.style.display = "block";
      }

    }

    const EditComment=(id)=>{
        const newState = Comment.map(obj=>{
            if (obj.id === id){
                return {...obj, text:EditedComment}
            }
            return obj;
        })
        setComment(newState);
        setEditedComment("");
    }
    const handleDeleteComment = (id) => {
        const newState = Comment.filter((obj) => obj.id !== id);
            setComment( newState);
        setEditedComment("");
        setIsHovering(false)
        setEditedCommentOpen(false)
      };

      if (typeof window !== 'undefined') {
      var textarea = document.querySelector('textarea');
      if(textarea){

          textarea.addEventListener('keydown', autosize);
      }
      }
      function autosize(){
        var el = this;
        setTimeout(function(){
          el.style.cssText = 'height:auto; padding:0';
          // for box-sizing other than "content-box" use:
          // el.style.cssText = '-moz-box-sizing:content-box';
          el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
      }


      const handle = useFullScreenHandle();


return(
    <div className="max3 fl h-90">
        <div className="w-35 sb-col1">
            <div className="cd-header">
                <div className="fl ali-cen jst-SB">
                    <div className="fl ali-cen fl-gap10 mb-11">
                        <p>#3</p>
                        <span>by designer name</span>
                    </div>
                    <div className="fl fl-gapp16">
                    <Link href="/ProjectsMessage" className="IconBtn"><Image src="ChatBtn.svg" alt="" width={32.4} height={27} /> </Link>

                    <button className="IconBtn Eliminate"><Image src="Eliminate.svg" alt="" width={27.08} height={27.08} />
                    <p className="Eliminatehover">Eliminate </p>
                    </button>

                    </div>
                </div>

                <div className="fl  fl-gap2 mb-32">

                <div className="fl gap5 finalRound ali-cen">
                    <input type="checkbox"/>
                    <label>Select for final round</label>
                </div>

                </div>
                <div className="fl  fl-gap2 jst-SB">
                <Image src="5stars.svg" alt="" width={130} height={18.5} />
                <button className="IconBtn"><Image src="trash.svg" alt="" width={19} height={22} /></button>


                </div>
            </div>
            <div className="cd-csec fl-col mb-32">
                <p className="CD-Description">Description the Idea </p>
                <p className="CD-Description2">Description the Idea</p>
            </div>

            <div className="fl ali-cen fl-gap2 mb-101">
                <Image src="paidstock.svg" alt="" width={31} height={31} />
                <p className="paidstock-p">Design uses paid stock</p>
            </div>
            <div className="SD-inp mb-45" style={{width:"256px"}}>
                <label>Comment</label>
                <div className="comment-textarea-cont">
                <textarea id="CommentBodyTextArea" className="comment-textarea" type="text" value={CommentText2}  onChange={e => setCommentText2(e.target.value)} placeholder="Add your comment" />
                </div>
                <button className="SD-btn5" onClick={handleSubmit2}>Send</button>
            </div>
            <div className="fl-col CMSec fl-gap8 mt-18 mb-118">

                {Comment&&Comment.map((item)=>(

                    <div key={item.id} className="cd-sec feedbackhover2" onMouseEnter={()=>handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}>
                        <label>osama</label> <span>{moment(new Date(item.created_at)).fromNow()}</span>
                        <div className={item.AccountType==="Client" ?"cd-csec fl ":"cd-csec fl "} id={IsHoveringDot&IsHoveringID===item.id?"pinkbackground":""} >
                        {item.x!=undefined&&
                            <div style={{display:"flex",alignItems:"center"}}>
                                {item.x!=0&&<div className="point">
                                </div> }
                            </div>
                            }
                            <p id="CommentBody">{item.comment}</p>
                            <input value={EditedComment} onChange={e => setEditedComment(e.target.value)} type="text" id="CommentEdit" style={{display: "none"}}/>
                            {/* <button onClick={()=>EditComment(item.id)} id="UpdateButton" style={{display: "none"}}>Update</button> */}
                        </div>
                        {/* <Dot key={item.id} x={item.point.x} y={item.point.y}  /> */}
                    </div>
                )).reverse()}


            </div>

        </div>
        <div className="sb-col2" >

            <button className="IconBtn abs1"><Image src="SearchComm.svg" alt='' width={19} height={19} onClick={()=>console.log("Search")}  /></button>
            <button className="IconBtn abs2"><Image src="FullScreen.svg" alt='' width={19} height={19} onClick={handle.enter}  /></button>
            <button className="IconBtn abs3"><Image src="CloseComm.svg" alt='' width={19} height={19} onClick={()=>router.back()}  /></button>
            <button className="IconBtn abs4"><Image src="CommLeft.svg" alt='' width={19} height={19} onClick={()=>console.log("Left")}  /></button>
            <button className="IconBtn abs5"><Image src="CommRight.svg" alt='' width={19} height={19} onClick={()=>console.log("Right")}  /></button>
            <FullScreen handle={handle} style={{display:"flex",justifyContent:"center"}}>
            <Image src="subex1.svg" alt='' width={928} height={928} onClick={handleDrawClick}  />
            </FullScreen>

            {dot!=null && <Dot x={dot.x} y={dot.y} setIsHoveringDot={setIsHoveringDot} setIsHoveringID={setIsHoveringID} DotID={0} /> }
            {dot!=null && <FeedBackInp x={dot.x} y={dot.y} setCommentText={setCommentText} CommentText={CommentText} handleSubmit={handleSubmit} setDot={setDot}  /> }
            {Comment.map((item)=>{
                // console.log(item.y);
                if(item.x === 0)
                {
                    console.log("no dot")
                }
                else{

                if(EditedCommentOpen&&item.id===IsHoveringID){

                    // console.log("yes")
                    return <div key={item.id}> <Dot  x={item.x} y={item.y} DotColor={IsHovering&IsHoveringID===item.id?DotColor2:DotColor} DotID={item.id}  handleDotClick={handleDotClick} setIsHoveringDot={setIsHoveringDot} setIsHoveringID={setIsHoveringID} textbody={item.text}/>
                    <FeedBackEditInp  x={item.x} y={item.y} setCommentText={setCommentText} CommentText={CommentText} handleSubmit={handleSubmit} setDot={setDot} setEditedComment={setEditedComment} EditedComment={EditedComment} EditComment={EditComment} textbody={item.text} DotID={item.id} handleDotClick={handleDotClick} handleDeleteComment={handleDeleteComment} />
                    </div>
                }
                else{
                    return  <Dot key={item.id} x={item.x} y={item.y} DotColor={IsHovering&IsHoveringID===item.id?DotColor2:DotColor} DotID={item.id}  handleDotClick={handleDotClick} setIsHoveringDot={setIsHoveringDot} setIsHoveringID={setIsHoveringID}/>
                }

                }
            })}
        </div>
    </div>
)};

export default Submitdesgin;


const FeedBackInp= ({x,y,setCommentText,CommentText,handleSubmit,setDot})=>{

    var textarea = document.querySelector('textarea');
    if(textarea){

        textarea.addEventListener('keydown', autosize);
    }

    function autosize(){
      var el = this;
      setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    }
    function clearContent()
    {
        setCommentText("")
        setDot(null);
    }

    return(
        <div
        className="FeedBackInp-cont"
        style={{
            position: 'absolute',
            left: x -5,
            top: y  +40 ,
            display:"flex",


        }}>
            <div style={{display:"flex",background:"transparent",flexDirection:"column",width:"100%",justifyContent:"space-between",}} className="">
            <textarea id="CommentBodyTextArea"  type="text" className="FeedBackInp-inp" value={CommentText}  onChange={e => setCommentText(e.target.value)} placeholder="Add your comment" />
            {/* <textarea className="FeedBackInp-inp" rows='1' placeholder='Auto-Expanding Textarea'></textarea> */}

            <div className="fl jst-SB buttonSection">
            <button className="FeedBackInp-Close" onClick={()=>{clearContent();}} title="Delete" ><Image src="X.svg" width={10} height={10} alt="" /></button>
            <button className="FeedBackInp-btn" onClick={handleSubmit}><Image src="send.svg" width={17.5} height={17.5} alt="send" /></button>
            </div>
            </div>




        </div>
    )
}

const FeedBackEditInp= ({x,y,handleDotClick,EditedComment,DotID,handleDeleteComment,setEditedComment,textbody,EditComment,})=>{

    useEffect(()=>{
        if(textbody!=""){
            setEditedComment(textbody);
        }
    },[textbody])


    return(
        <div
        className="FeedBackInp-cont"
        style={{
            position: 'absolute',
            left: x -5,
            top: y  +40 ,
            display:"flex",


        }}>
            {/* <div style={{display:"flex",flexDirection:"column",width:"152px"}} className="">
            <button className="FeedBackInp-Close" onClick={()=>handleDeleteComment(DotID)} title="Delete" >X</button>
            <input type="text" className="FeedBackInp-inp" value={EditedComment}   onChange={e => setEditedComment(e.target.value)} />
            </div>
            <button className="FeedBackInp-btn" onClick={()=>{EditComment(DotID);handleDotClick()}}>Edit</button> */}
            <div style={{display:"flex",background:"transparent",flexDirection:"column",width:"100%",justifyContent:"space-between",}} className="">
            <textarea id="CommentBodyTextArea"  type="text" className="FeedBackInp-inp" value={EditedComment}  onChange={e => setEditedComment(e.target.value)} placeholder="Add your comment" />
            {/* <textarea className="FeedBackInp-inp" rows='1' placeholder='Auto-Expanding Textarea'></textarea> */}

            <div className="fl jst-SB buttonSection">
                <div className="fl ali-cen fl-gap10">
                    <button className="FeedBackInp-Close" onClick={()=>{handleDotClick();}} title="Delete" ><Image src="X.svg" width={10} height={10} alt="" /></button>
                    <span >3 hr. ago</span>
                </div>

                <button className="FeedBackInp-btn" onClick={()=>{EditComment(DotID);handleDotClick()}}><Image src="send.svg" width={17.5} height={17.5} alt="send" /></button>
            </div>
            </div>


        </div>
    )
}
