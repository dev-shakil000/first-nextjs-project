import Head from "next/head";
import AppointmentWrapper from "../src/components/appointment/AppointmentWrapper";
import HomeWrapper from "../src/components/home/HomeWrapper";
import FundRaiseWrapper from "../src/components/fund-raise/FundRaiseWrapper";
import Services from "../src/components/services";
import Insights from "../src/components/insights";
import Testimonials from "../src/components/testimonials";
import AboutUsWrapper from "../src/components/aboutUs/AboutUsWrapper";
import BackgroundPictureSection from "../src/components/backgroundPictureSection/BackgroundPictureSection";
import BookAppointment from "../src/components/appointment/BookAppointment";
import Faqs from "../src/components/faqs/FaqWrapper";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Love Care</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="home">
        <HomeWrapper />
      </section>

      <section id="fund_raise">
        <FundRaiseWrapper />
      </section>

      <section id="about_us">
        <AboutUsWrapper />
      </section>

      <BookAppointment />

      <section id="services">
        <Services />
      </section>

      <Insights />

      <section id="testimonials">
        <Testimonials />
      </section>

      <BackgroundPictureSection />

      <section id="faq">
        <Faqs />
      </section>

      <section>
        <AppointmentWrapper />
      </section>
    </div>
  );
}
