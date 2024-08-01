import  {useEffect, useState} from 'react';
import api from '../../pages/api/api';
import Swal from 'sweetalert2';
import moment from 'moment';
import esLocale from "moment/locale/es";


const CourseDetailsArea = ({setEvent}) => {
   
   const [comment, setComment] = useState("");
   const [evento, setEvento] = useState({
      name: "",
      description: "",
      datetime: "",
      location: "",
      images: [],
      comments: [],
      attending: false,
      attendance: 0,
   });

   useEffect(() => {
   if (typeof window !== "undefined") {
         getEvent();
      }
   }, []);

   const getEvent = async () => {
      api.get(`/event/`, {
         params: {
            id: window.location.pathname.split("/")[2],
            email: localStorage.getItem("email"),
         },
      })
      .then((res) => {
         setEvento(res.data);
         setEvent(res.data.name);
      });
   };


   const sendComment = (e) => {
      e.preventDefault();
      api.post(`/event/comment/`, {
         event: evento.id,
         content: comment,
         email: localStorage.getItem("email"),
      })
      .then((res) => {
         Swal.fire({
            title: "Comentario enviado",
            icon: "success",
            confirmButtonText: "Aceptar",
         });
         getEvent();
         setComment("");
      });
   }

   const attendEvent = () => {
      api.post(`/event/attending/`, {
         event: evento.id,
         email: localStorage.getItem("email"),
      })
      .then((res) => {
         Swal.fire({
            title: "Asistirás al evento",
            icon: "success",
            confirmButtonText: "Aceptar",
         });
         getEvent();
      });
   }

    return (
      console.log(evento),
        <>
         <section className="c-details-area pt-120 pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12">
                  <div className="c-details-wrapper mr-25">
                     <div className="c-details-thumb p-relative mb-40">
                        <img src={evento.images[0]} alt="details-bg" />
                     </div>
                     <div className="course-details-content mb-45">
                        
                        <div className="tpcourse__ava-title mb-25">
                           <h4 className="c-details-title">{evento.name}</h4>
                        </div>
                        <div className="tpcourse__meta course-details-list">
                           <ul className="d-flex align-items-center">
                              <li>
                                 <div className="rating-gold d-flex align-items-center">
                                   <h5>{evento.location}</h5>
                                 </div>
                              </li>

                              <li><span>{moment(evento.datetime).format('LL')} a las {moment(evento.datetime).format('LT')} horas</span></li>
                              <li><img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" /> <span>{evento.attendance} Asistentes</span></li>
                              <li><img src="/assets/img/icon/c-meta-03.png" alt="meta-icon" /> <span>{evento.comments.length} Comentarios</span></li>
                              {!evento.attending ? (
                                 <button className="bg-orange-500 text-white w-full py-3 rounded-md mt-4" onClick={attendEvent}>Asistir al evento</button>
                              ) : (
                                 <button className="bg-gray-500 text-white w-full py-3 rounded-md mt-4" disabled={true}>Ya asistirás al evento</button>
                              )}
                           </ul>
                        </div>
                     </div>
                     <div className="c-details-about mb-40">
                        <h5 className="tp-c-details-title mb-20">Descripción del evento</h5>
                        <p>{evento.description}</p>
                      
                     </div>
                     {/* <div className="cor-details-instructor mb-40">
                        <h4 className="tp-c-details-title mb-40">Instructor</h4>
                        <div className="course-instructor-details d-flex f-wrap align-items-center">
                           <div className="course-avata mr-30 mb-20">
                              <img src="/assets/img/course/c-details-ava-thumb-01.jpg" alt="avata-thumb" />
                           </div>
                           <div className="course-avatar-details mb-20">
                              <h5 className="c-avata-title mb-10">Hossain Mahmud</h5>
                              <p>Award Winning Chemical & User Interface Design Training</p>
                              <div className="c-details-list mb-5">
                                 <ul className="d-flex align-items-center">
                                    <li>
                                       <div className="rating-gold d-flex align-items-center">
                                          <p>4.7</p>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-rs-star"></i>
                                          <span>(125)</span>
                                       </div>
                                    </li>
                                    <li><img src="/assets/img/icon/c-details-01.png" alt="meta-icon" /><span>35 Classes</span></li>
                                 </ul>
                              </div>
                              <div className="c-details-stu">
                                 <ul>
                                    <li className="d-flex align-items-center"><img src="/assets/img/icon/c-details-02.png" alt="meta-icon"/> <span>2,35,687 Students</span></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <p>Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.</p>
                     </div> */}
                     <div className="c-details-review pb-15">
                        <div className="c-review-title-wrapper">
                           <h5 className="c-review-title mb-40">Comentarios</h5>
                        </div>
                        <div className="course-reviewer-item-wrapper">
                              {evento.comments ? (
                                 evento?.comments?.map((item, i) => (                
                                    <div key={i} className="course-reviewer-item d-flex mb-25">
                                       <div className="course-review-ava">
                                          <img src={item.photo} alt="details-avata" />
                                       </div>
                                       <div className="course-review-content p-relative">
                                          <h5 className="course-ava-title mb-15">{item.author}</h5>
                                          <p className="text-black">{item.content}</p>
                                          {moment(item.datetime).format('LL')} a las {moment(item.datetime).format('LT')} horas  
                                       </div>
                                    </div>
                                 )))
                              : 
                              <p>No hay comentarios</p>
                              }
                        </div>
                     </div>
                     <div>
                        <h5 className="text-2xl font-bold">Deja un comentario</h5>
                        <form className="grid grid-cols-1 gap-6 mt-6" onSubmit={(e) => sendComment(e)}>
                           <div className="grid grid-cols-6 gap-6">
                              <div className="w-full col-span-6">
                                 <textarea placeholder="Comentario" className="w-full h-32 px-3 py-2 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" required value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                              </div>
                              <div className="col-span-6 w-full">
                                 <button type="submit" className="bg-orange-500 text-white w-full py-3 rounded-md">Enviar</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default CourseDetailsArea;