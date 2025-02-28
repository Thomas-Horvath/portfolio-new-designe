import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components//BackButton/BackButton';
import { LanguageContext } from '../../contexts/LanguageContext';


const BlogPage = () => {
    const { translations } = useContext(LanguageContext);
    const { id } = useParams();
    let content;



    if (Number(id) === 1) {
        content = <div className="blog-article-container" id="blog-1">
            <article className="blog-1 blog-section" >
                <h2>{translations.blogpage.blog1.title1}</h2>
               {translations.blogpage.blog1.content1.map((content,index) => <p key={index}>{content}</p> )}
               <strong>
                {translations.blogpage.blog1.example.title}
               </strong>
               <div className='example'>
                 <div>{translations.blogpage.blog1.example.example1}</div>
                 <div>{translations.blogpage.blog1.example.example2}</div>
               </div>
               <p>{translations.blogpage.blog1.example.explanetion}</p>
               <h3>{translations.blogpage.blog1.title2}</h3>
               {translations.blogpage.blog1.content2.map((content,index) => <p key={index}>{content}</p> )}
               <h3>{translations.blogpage.blog1.title3}</h3>
               {translations.blogpage.blog1.content3.map((content,index) => <p key={index}>{content}</p> )}
            </article>
            <BackButton />
        </div>
    } else if (Number(id) === 2) {
        content = <div className="blog-article-container" id="blog-2">
            <article className="blog-2 blog-section" >
            <h2>{translations.blogpage.blog2.title1}</h2>
               {translations.blogpage.blog2.content1.map((content,index) => <p key={index}>{content}</p> )}
               <strong>
                {translations.blogpage.blog2.example.title}
               </strong>
               <div className='example'>
                 <div>{translations.blogpage.blog2.example.example1}</div>
                 <div>{translations.blogpage.blog2.example.example2}</div>
               </div>
               <p>{translations.blogpage.blog2.example.explanetion}</p>
               <h3>{translations.blogpage.blog2.title2}</h3>
               {translations.blogpage.blog2.content2.map((content,index) => <p key={index}>{content}</p> )}
               <h3>{translations.blogpage.blog2.title3}</h3>
               {translations.blogpage.blog2.content3.map((content,index) => <p key={index}>{content}</p> )}
            </article>
            <BackButton />
        </div>
    } else if (Number(id) === 3) {
        content = <div className="blog-article-container" id="blog-3">
            <article className="blog-3 blog-section" >
            <h2>{translations.blogpage.blog3.title1}</h2>
               {translations.blogpage.blog3.content1.map((content,index) => <p key={index}>{content}</p> )}
               <strong>
                {translations.blogpage.blog3.example.title}
               </strong>
               <div className='example'>
                 <div>{translations.blogpage.blog3.example.example1}</div>
                 <div>{translations.blogpage.blog3.example.example2}</div>
               </div>
               <p>{translations.blogpage.blog3.example.explanetion}</p>
               <h3>{translations.blogpage.blog3.title2}</h3>
               {translations.blogpage.blog3.content2.map((content,index) => <p key={index}>{content}</p> )}
               <h3>{translations.blogpage.blog3.title3}</h3>
               {translations.blogpage.blog3.content3.map((content,index) => <p key={index}>{content}</p> )}
            </article>
            <BackButton />
        </div>
    } else if (Number(id) === 4) {
        content =
            <div className="blog-article-container" id="blog-4">
                <article className="blog-4 blog-section" >
                <h2>{translations.blogpage.blog4.title1}</h2>
               {translations.blogpage.blog4.content1.map((content,index) => <p key={index}>{content}</p> )}
               <strong>
                {translations.blogpage.blog4.example.title}
               </strong>
               <div className='example'>
                 <div>{translations.blogpage.blog4.example.example1}</div>
                 <div>{translations.blogpage.blog4.example.example2}</div>
               </div>
               <p>{translations.blogpage.blog4.example.explanetion}</p>
               <h3>{translations.blogpage.blog4.title2}</h3>
               {translations.blogpage.blog4.content2.map((content,index) => <p key={index}>{content}</p> )}
               <h3>{translations.blogpage.blog4.title3}</h3>
               {translations.blogpage.blog4.content3.map((content,index) => <p key={index}>{content}</p> )}
                </article>
                <BackButton />
            </div>
    }



    return (
        <main className="blogPage-wrapper">
            {content}
        </main>
    )
}

export default BlogPage