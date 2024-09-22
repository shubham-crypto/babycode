// src/components/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import babycode from  '../babycode.png'
import insta from  '../insta.webp'
import user from  '../user.png'
import arrow from '../arrow.png'
import check from '../check.png'
import home from '../home.png'
import feedback from '../feedback.png'
import shop from '../shop.png'
import group from '../group.png'
import story from '../story.png'
import right from '../right.png'
import logout from '../logout.png'
import chart from '../chart.jpeg'
import boy from '../boy.webp'
import yt from '../youtube.png'
import speak from '../speak.jpeg'
import listen from '../listen.jpeg'
import read  from '../read.jpeg'
import write from '../write.jpeg'
import vocab from '../vocab.jpeg'
import cla from '../cla.jpeg'
import exam from '../exam.jpeg'
import news from '../news.jpeg'

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="home-page flex h-screen">
      <div className="w-1/6 bg-gradient-to-br from-blue-600 to-blue-900 p-4 pt-0 text-white  flex flex-col">
        <div className="flex items-center ">
          <img 
            src={babycode}
            alt="Babycode Logo" 
            className="w-12 h-12"
          />
          <span className="ml-2 text-2xl  text-white">BabyCode</span>
        </div>
        <div className="mt-6  flex flex-col text-xs pl-8">
          <div className="flex items-center mb-2 p-2 hover:bg-blue-500 transition-colors rounded-lg"> {/* Hover effect */}
            <img src={home} alt="Home" className="w-5 h-5 mr-2" />
            <span>Home</span>
          </div>
          <div className="flex items-center mb-2 p-2 hover:bg-blue-500 transition-colors rounded-lg"> {/* Hover effect */}
            <img src={group} alt="Community" className="w-5 h-5 mr-2" />
            <span>Community</span>
          </div>
          <div className="flex items-center mb-2 p-2 hover:bg-blue-500 transition-colors rounded-lg"> {/* Hover effect */}
            <img src={story} alt="Stories" className="w-5 h-5 mr-2" />
            <span>Stories</span>
          </div>
          <div className="flex items-center mb-2 p-2 hover:bg-blue-500 transition-colors rounded-lg"> {/* Hover effect */}
            <img src={shop} alt="Shop" className="w-5 h-5 mr-2" />
            <span>Shop</span>
          </div>
          <div className="flex items-center mb-2 p-2 hover:bg-blue-500 transition-colors rounded-lg"> {/* Hover effect */}
            <img src={feedback} alt="Feedback" className="w-4 h-4 mr-2" />
            <span>Feedback</span>
          </div>
        </div>
        <div className="mt-auto bg-white  flex-col items-center justify-between pt-4 pb-4 pl-4 rounded-lg space-y-4">
          <div className="text-blue-500 text-md">
            Explore premium<br></br> features with ease!
          </div>

          <div className="flex flex-col text-black text-xs space-y-2">
            <div className="flex items-center">
              <img 
                src={check}
                alt="right" 
                className="w-3 h-3"
              />
              <span className="ml-2">Unlimited Speaking Test Access</span>
            </div>
            <div className="flex items-center">
              <img 
                src={check}
                alt="right" 
                className="w-3 h-3"
              />
              <span className="ml-2">Unlimited Writing Test Access </span>
            </div>
            <div className="flex items-center">
              <img 
                src={check}
                alt="right" 
                className="w-3 h-3"
              />
              <span className="ml-2">Analyze your answer</span>
            </div>
            <div className="flex items-center">
              <img 
                src={check}
                alt="right" 
                className="w-3 h-3"
              />
              <span className="ml-2">Check your band score</span>
            </div>
          </div>

          {/* Third Section - Price and Buy Now Button */}
          <div className="flex items-center text-xs ">
            <span className="mr-2 text-black">Only @ ₹299</span>
            <button className="bg-blue-500 text-white h-8 rounded-l-full py-1 px-3 ml-auto flex items-center shadow-lg">
              <span>Buy Now</span>
              <img 
                src={right}
                alt="right" 
                className="w-4 h-4 ml-2"
              />
            </button>
          </div>
        </div>
        <button 
          onClick={handleLogout} 
          className="mt-4 mb-4 flex items-center text-white p-3 rounded-lg hover:bg-blue-500 transition-colors">
            <img 
                src={logout}
                alt="logout" 
                className="w-5 h-5 mr-4"
            />
            <span className="text-sm">Logout</span> 
        </button>
      </div>

      {/* Main content area */}
      <div className="flex-grow flex flex-col items-center space-y-4 bg-gray-100">
        <div className="flex justify-between items-center w-full pl-12 pr-12 bg-white border-2 p-1">
          <span className="text-xl font-semibold">Your Progress Summary</span>

          <div className="flex items-center space-x-8">
            <img 
              src={insta} 
              alt="Instagram Logo" 
              className="w-6 h-6 rounded-full" 
            />

            <div className="bg-white flex items-center border-2 rounded-l-full rounded-r-full p-1">
              <img 
                src={user}
                alt="User Logo" 
                className="w-6 h-6 rounded-full"
              />
              <img 
                src={arrow}
                alt="User Logo" 
                className="w-3 h-3 ml-1 "
              />
            </div>

          </div>
        </div>
        <div className="ml-12 mr-auto  flex bg-white rounded-lg text-sm">
           <div className="pl-4 pr-4 pt-2 pb-2 border-2 rounded-l-lg">IELTS</div>
           <div className="pl-4 pr-4 pt-2 pb-2 border-t-2 border-b-2">PTE</div>
           <div className="pl-4 pr-4 pt-2 pb-2 border-2 rounded-r-lg">TOEFL</div>
        </div>
        <div className="flex space-x-6 pl-12 pr-12  w-full">
           <div className="flex flex-col  bg-white p-4 pr-8 pb-0 rounded-lg  w-3/5">
              <div className="p-2 rounded-lg bg-orange-50">
                  <span className=" text-teal-400">Wow!</span> you're about to reach your targeted band
              </div>
              <img
                src={chart}
                alt="chart" 
                className="h-48"
              />
           </div>
           <div className="relative w-1/4 h-64 border-2 rounded-xl overflow-hidden ">
              <img
                src={boy}
                alt="boy" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
              
              <div className="absolute bottom-4  w-full text-center">

                <h2 className="text-white text-2xl  font-serif">One Share can save<br></br> many lives</h2>
                
                <p className="text-white text-sm">Your one share can unlock a world of<br></br> education for undprivileged.</p>
                <button className="bg-white rounded-full mt-4 px-16 py-1 text-xs">
                  Share App
                </button>
              </div>
           </div>
        </div>
        <div className="flex space-x-8 mr-auto pl-12 pr-12 w-full h-full">
          <div className=" w-3/5">
             <h1 className="text-lg font-semibold"> Prepare with ease</h1>
             <div className="flex flex-col space-y-4  pl-2">
                 <div className="flex space-x-4">
                    <div className="flex flex-col space-y-2 items-center">
                      <img
                        src={speak}
                        alt="r1"
                        className="w-32 h-28 rounded-3xl"
                      />
                      <p className="text-sm mt-2">Speaking</p>
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                      <img
                        src={listen}
                        alt="r1"
                        className="w-32 h-28 rounded-3xl"
                      />
                      <p className="text-sm mt-2">Listening</p>
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                      <img
                        src={read}
                        alt="r1"
                        className="w-32 h-28 rounded-3xl"
                      />
                      <p className="text-sm mt-2">Reading</p>
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                      <img
                        src={write}
                        alt="r1"
                        className="w-32 h-28 rounded-3xl"
                      />
                      <p className="text-sm mt-2">Writing</p>
                    </div>
                 </div>
                 <div className="flex space-x-4">
                    <div className="flex flex-col space-y-2 items-center">
                      <img
                        src={vocab}
                        alt="r1"
                        className="w-32 h-28 rounded-3xl"
                      />
                      <p className="text-sm mt-2">Vocabulary</p>
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                      <img
                        src={cla}
                        alt="r1"
                        className="w-32 h-28 rounded-3xl"
                      />
                      <p className="text-sm mt-2">Classes</p>
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                      <img
                        src={exam}
                        alt="r1"
                        className="w-32 h-28 rounded-3xl"
                      />
                      <p className="text-sm mt-2">Book IELTS Exam</p>
                    </div>
                    <div className="flex flex-col space-y-2 items-center">
                      <img
                        src={news}
                        alt="r1"
                        className="w-32 h-28 rounded-3xl"
                      />
                      <p className="text-sm mt-2">Student News</p>
                    </div>
                 </div>
             </div>
          </div>
          <div className="flex flex-col space-y-4 h-3/4 mt-8">
              <button
                className="flex items-center p-2 rounded-lg bg-white pl-16 pr-16 shadow-md h-auto">
                <img 
                src={yt}
                alt="youtube" 
                className="w-6 h-6 mr-2"
                />
                <span className="text-sm">App Guide Video</span> 
              </button>
              <div className="flex flex-col space-y-2 bg-white rounded-lg p-4 flex-grow">
                 <h1 className="text-lg font-bold">Practice Mock Tests</h1>
                 <p className="text-sm">Get the authentic IELTS exam<br></br> experience with all four modules<br></br> covered!</p>
                 <button className="text-white bg-blue-700 w-full p-1 rounded-l-full rounded-r-full text-sm">
                     Start
                 </button>
              </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
