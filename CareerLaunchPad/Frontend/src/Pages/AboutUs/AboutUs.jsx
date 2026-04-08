import React from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./AboutUs.css";
import { FaLightbulb, FaUsers, FaTrophy, FaRocket } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>About Our Platform</h1>
                    <p className="hero-subtitle">
                        Connecting Talent, Creating Opportunities, Building Futures
                    </p>
                </div>
            </section>

            {/* ===== MISSION SECTION ===== */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                We are dedicated to revolutionizing the way students, freelancers, and clients
                                connect and collaborate. Our platform serves as a bridge between talented
                                individuals and meaningful opportunities, empowering everyone to achieve their
                                professional goals.
                            </p>
                            <p>
                                Whether you're a student looking to gain real-world experience, a freelancer
                                seeking exciting projects, or a client in need of skilled professionals, our
                                ecosystem provides the tools, resources, and community you need to succeed.
                            </p>
                        </div>
                        <div className="mission-features">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <FaLightbulb />
                                </div>
                                <h3>Innovation</h3>
                                <p>Cutting-edge technology for seamless collaboration</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <FaUsers />
                                </div>
                                <h3>Community</h3>
                                <p>A supportive network of talented professionals</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <FaTrophy />
                                </div>
                                <h3>Excellence</h3>
                                <p>Committed to highest standards of quality</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <FaRocket />
                                </div>
                                <h3>Growth</h3>
                                <p>Accelerating careers and business growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT WE DO SECTION ===== */}
            <section className="what-we-do-section">
                <div className="container">
                    <h2>What We Do</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-number">01</div>
                            <h3>Project Management</h3>
                            <p>
                                Empower clients to post projects and manage their work efficiently. Our
                                intelligent matching system connects them with the most suitable professionals.
                            </p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">02</div>
                            <h3>Freelance Opportunities</h3>
                            <p>
                                Freelancers can explore diverse projects, showcase their skills, and build
                                their professional portfolio while earning competitive rates.
                            </p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">03</div>
                            <h3>Learning & Development</h3>
                            <p>
                                Students gain hands-on experience through real-world projects, interview
                                preparation, and mentorship from industry professionals.
                            </p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">04</div>
                            <h3>AI-Powered Recommendations</h3>
                            <p>
                                Leveraging advanced AI algorithms, we provide intelligent job and project
                                recommendations tailored to individual skills and preferences.
                            </p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">05</div>
                            <h3>Secure Transactions</h3>
                            <p>
                                Safe and transparent payment processing ensures trust and security for
                                all transactions on our platform.
                            </p>
                        </div>

                        <div className="service-card">
                            <div className="service-number">06</div>
                            <h3>Community Support</h3>
                            <p>
                                Access to resources, forums, and expert support to help you succeed at
                                every stage of your professional journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STATISTICS SECTION ===== */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">10K+</div>
                            <p>Active Users</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">2K+</div>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">500+</div>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">95%</div>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US SECTION ===== */}
            <section className="why-choose-section">
                <div className="container">
                    <h2>Why Choose Us?</h2>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <h3>🎯 Precision Matching</h3>
                            <p>
                                Our advanced algorithm matches the right talent with the right opportunities,
                                ensuring higher success rates and satisfaction.
                            </p>
                        </div>

                        <div className="reason-card">
                            <h3>💼 Professional Network</h3>
                            <p>
                                Join thousands of professionals and build meaningful connections that extend
                                beyond individual projects.
                            </p>
                        </div>

                        <div className="reason-card">
                            <h3>🛡️ Trust & Security</h3>
                            <p>
                                Verified profiles, secure payments, and comprehensive dispute resolution ensure
                                a safe experience for everyone.
                            </p>
                        </div>

                        <div className="reason-card">
                            <h3>📈 Growth Opportunities</h3>
                            <p>
                                Whether you're starting your career or scaling your business, our platform
                                provides unlimited growth potential.
                            </p>
                        </div>

                        <div className="reason-card">
                            <h3>🚀 Innovation First</h3>
                            <p>
                                We continuously innovate with AI-powered features and tools to stay ahead
                                of the curve in the digital economy.
                            </p>
                        </div>

                        <div className="reason-card">
                            <h3>🤝 24/7 Support</h3>
                            <p>
                                Our dedicated support team is always available to help you succeed and
                                resolve any questions or concerns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Get Started?</h2>
                    <p>Join thousands of professionals who are already transforming their careers</p>
                    <div className="cta-buttons">
                        <a href="/signup" className="btn btn-primary">
                            Create Your Account
                        </a>
                        <a href="/" className="btn btn-secondary">
                            Explore Features
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
