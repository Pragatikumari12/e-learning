import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about">
        <div className="about-content">
            <h2>About Us</h2>
            <p>At E-Learning Platform, we are revolutionizing the way people learn with our cutting-edge e-learning platform. Designed to cater to diverse educational needs, our platform provides a comprehensive learning experience through an array of innovative features.</p>
            <h2>What We Are Offer</h2>
            <ol>
                <li>
                <strong>Engaging Video Content:</strong>
                Dive into expert-led video lessons that break down complex concepts into easy-to-understand modules. Each video is tailored to provide a focused understanding of specific topics, ensuring you grasp the essence of the subject.
                </li>
                <li>
                <strong>Detailed Notes:</strong>
                Complement your learning with well-structured notes available for each video topic. These notes are designed to reinforce key points and serve as a quick reference guide for revision.
                </li>
                <li>
                <strong>Interactive Quizzes:</strong>
                Test your knowledge with quizzes directly linked to the video content. These quizzes are designed to challenge your understanding, reinforce learning, and ensure retention.
                </li>
                <li>
                <strong>Comprehensive Quiz Reports:</strong>
                Gain insights into your learning progress through detailed quiz reports. Track your performance, identify areas for improvement, and celebrate your achievements as you move forward in your educational journey.
                </li>
            </ol>
            <h2>Why Choose Us</h2>
            <ul>
                <li>
                <strong>Holistic Learning Experience:</strong> With videos, notes, and interactive quizzes, our platform provides a seamless blend of learning tools.
                </li>
                <li>
                <strong>Personalized Feedback:</strong> Quiz reports offer a personalized touch, guiding you on your path to mastery. 
                </li>
                <li>
                <strong>Flexible Learning:</strong> Learn at your own pace, anytime and anywhere.
                </li>
            </ul>
        </div>
    </div>
  )
}

export default About