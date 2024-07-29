<script>
import FAQ from '$lib/FAQ.svelte';

let faqs = [
        {
            question: 'What are the risk factors for liver cancer?',
            answer: 'Risk factors for liver cancer include chronic infection with hepatitis B or C, cirrhosis, certain inherited liver diseases, diabetes, fatty liver disease, excessive alcohol consumption, and exposure to aflatoxins.'
        },
        {
            question: 'What are the symptoms of liver cancer?',
            answer: 'Early-stage liver cancer often does not cause symptoms. As the disease progresses, symptoms may include weight loss, loss of appetite, upper abdominal pain, nausea and vomiting, general weakness and fatigue, an enlarged liver, and yellowing of the skin and eyes (jaundice).'
        },
        {
            question: 'How is liver cancer diagnosed?',
            answer: 'Liver cancer is diagnosed through a combination of physical exams, blood tests, imaging tests (such as ultrasound, CT scan, and MRI), and sometimes a liver biopsy.'
        },
        {
            question: 'What are the treatment options for liver cancer?',
            answer: 'Treatment options for liver cancer depend on the stage and type of cancer and the overall health of the patient. They may include surgery, liver transplantation, ablation therapy, embolization, targeted therapy, immunotherapy, and radiation therapy.'
        },
        {
            question: 'Can liver cancer be prevented?',
            answer: 'While not all liver cancers can be prevented, the risk can be reduced by avoiding risk factors. Preventive measures include getting vaccinated against hepatitis B, reducing alcohol consumption, maintaining a healthy weight, managing diabetes, and avoiding exposure to aflatoxins.'
        },
        {
            question: 'How can I support someone with liver cancer?',
            answer: 'Supporting someone with liver cancer involves providing emotional support, helping with daily activities, accompanying them to medical appointments, and encouraging them to follow their treatment plan. Being a good listener and offering practical help can make a significant difference.'
        },
        {
            question: 'How can I get involved with the Liver Care Foundation?',
            answer: 'You can get involved with the Liver Care Foundation by donating, volunteering, participating in our events, and spreading awareness about liver cancer. Visit our "Get Involved" page for more information.'
        },
        {
            question: 'What should I do if I think I have symptoms of liver cancer?',
            answer: 'If you experience symptoms of liver cancer, it is crucial to seek medical advice immediately. Contact your healthcare provider for an evaluation and appropriate diagnostic tests. Early detection and treatment can improve outcomes.'
        }
];




</script>


<div class="hero">
    <div>
        <h1>
            Fighting Liver Cancer Together: Hope, Research, Support
        </h1>
        <a href="/liver-cancer"> Learn About Liver Cancer</a>
    </div>
    
    <h2> An image is placed here!!</h2>

</div>

<div class="hero-2">
    <h1>
        <span>Welcome</span>
    </h1>

    <p>
        The Liver Care Foundation strives to provide 
        support, education, and resources to those affected by liver cancer and to fund research 
        for better treatments and ultimately a cure
    </p>
</div>

<div class="imgs">
    <!-- <img src="" alt="image 1">
    <img src="" alt="image 2">
    <img src="" alt="image 4"> -->
</div>

<div class="info">
    <h1>
        Resources and Information on Liver Cancer
    </h1>

    <p>
        Around 800,000 individuals worldwide receive a diagnosis of this illness every year. 
        With over 700,000 deaths from the disease each year, liver cancer is also one of the 
        main causes of cancer-related mortality globally. We’re here with answers, guidance, and support.
    </p>

    <div class="info-cards">
        <ul>
            <li><a href="/">Understading Liver Cancer </a></li>
            <li><a href="/">Managing Liver Cancer</a></li>
            <li><a href="/">FInd Support & Resources</a></li>
            <li><a href="/">Prevention Measures</a></li>
        </ul>
    </div>
</div>

<FAQ {faqs} />

<style>
    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 50px 100px;
    }

    .hero h1{
        font-weight: 300;
        font-size: 3.3em;
        padding-bottom: 25px;
    }

    .hero a{
        background-color: #9d0063;
        color: #fff;
        border: 1px solid #9d0063;
        color: #fff;
        padding: 12px;
        border-radius: 25px;
    }

    .hero a:hover{
        background-color: #ff347d;
        border: 1px solid #ff347d;
        color: black;
        transition: 500ms;
    }   

    .hero-2{
        padding: 50px 100px;
        background-color: #fff;
        text-align: center;
    }

    .hero-2 h1, 
    .hero-2 p {
        display: inline-block;
        max-width: 600px; /* Adjust this value as needed */
        width: 100%;
        margin: 0 auto;
    }

    .hero-2 h1{
        font-size: 3em;
        margin-bottom: 10px;
    }

    .hero-2 span{
        color:#9d0063;
    }

    .imgs{
        display: flex;
        justify-content: center;
        padding: 90px 100px;
        background-color: #fff;
        /* background: url(/background.svg); */
        background-size: cover;
    }

    .info{
        padding: 50px 100px;
        /* text-align: center; */
        /* align-items: end; */
    }

    .info h1{
        margin-bottom: 15px;
        font-size: 2.3em;
    }

    .info p{
        margin-bottom: 15px;   
    }

    .info-cards ul {
        display: flex;
        width: 100%;
        list-style: none;
    }

    .info-cards li {
        margin-right: 25px;
        border: 1px solid #9d0063;
        padding: 10px;
        background-color: #9d0063;
    }

    .info-cards li a{
        font-weight: 500;
        color: #fff;
    }

</style>