import React , {useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import BackButton from '../../components//BackButton/BackButton';
import { LanguageContext } from '../../contexts/LanguageContext';


const InfoPage = () => {
    const { translations } = useContext(LanguageContext);
    const { category } = useParams();
    let content;

    if (category === "policy") {
        content = <section className="policy">
            <h1>{translations.policy.main_title}</h1>

            <div className="policy-wrapper">
                <h2>{translations.policy.wrapper_content[0].title}</h2>

                <p>{translations.policy.wrapper_content[0].content}</p>

                <h2>{translations.policy.wrapper_content[1].title}</h2>

                <p>{translations.policy.wrapper_content[1].content}</p>

                <h2>{translations.policy.wrapper_content[2].title}</h2>

                <p>{translations.policy.wrapper_content[2].content}</p>

                <h2>{translations.policy.wrapper_content[3].title}</h2>

                <p>{translations.policy.wrapper_content[3].content}</p>
            </div>
            <BackButton />
        </section>

    } else if (category === 'impresszum') {
        content = <section className="impresszum">
            <h1>{translations.impressum.main_title}</h1>

            <div className="page-owner-container">
                <h2>{translations.impressum.page_owner.title}</h2>

                <div className="content-item-container">
                    <strong>{translations.impressum.page_owner.name}</strong>
                    <p>Horváth Tamás</p>
                </div>
                <div className="content-item-container">
                    <strong>{translations.impressum.page_owner.address}</strong>
                    <p>2013 Pomáz, Példa utca</p>
                </div>
                <div className="content-item-container">
                    <strong>{translations.impressum.page_owner.phone}</strong>
                    <p>06-1-123-4567</p>
                </div>
                <div className="content-item-container">
                    <strong>{translations.impressum.page_owner.email}</strong>
                    <p>info@sajatdomainnevem.hu</p>
                </div>
            </div>

            <div className="hosting-provider-container">
                <h2>{translations.impressum.hosting_provider.title}</h2>
                <div className="content-item-container">
                    <strong>{translations.impressum.hosting_provider.company_name}</strong>
                    <p> Nethely Kft.</p>
                </div>
                <div className="content-item-container">
                    <strong>{translations.impressum.hosting_provider.company_address}</strong>
                    <p>1115 Budapest, Halmi utca 29.</p>
                </div>
                <div className="content-item-container">
                    <strong>{translations.impressum.hosting_provider.branch_office}</strong>
                    <p> 6724 Szeged, Teréz utca 34.</p>
                </div>
                <div className="content-item-container">
                    <strong>{translations.impressum.hosting_provider.website}</strong>
                    <p> <Link to="https://www.nethely.hu" target="_blank">https://www.nethely.hu</Link></p>
                </div>
                <div className="content-item-container">
                    <strong>{translations.impressum.hosting_provider.contact_page}</strong>
                    <p> <Link to="https://www.nethely.hu/rolunk" target="_blank">https://www.nethely.hu/rolunk</Link></p>
                </div>
            </div>
            <BackButton />
        </section>
    } else if (category === 'cookies') {
        content = <section className="cookies">
            <h1>{translations.cookiesSection.title}</h1>

            <div className="cookies-wrapper">
                <p>{translations.cookiesSection.content.introduction.text}</p>

                <h2>{translations.cookiesSection.content.whatIsCookie.title}</h2>
                <p>{translations.cookiesSection.content.whatIsCookie.text}</p>


                <h2>{translations.cookiesSection.content.cookiesPurpose.title}</h2>

                <strong>{translations.cookiesSection.content.cookiesPurpose.types[0].type}</strong>
                <p>{translations.cookiesSection.content.cookiesPurpose.types[0].text}</p>

                <strong>{translations.cookiesSection.content.cookiesPurpose.types[1].type}</strong>
                <p>{translations.cookiesSection.content.cookiesPurpose.types[1].text}</p>

                <strong>{translations.cookiesSection.content.cookiesPurpose.types[2].type}</strong>
                <p>{translations.cookiesSection.content.cookiesPurpose.types[2].text}</p>
                <p><u>{translations.cookiesSection.content.cookiesPurpose.types[2].link_title}</u>
                    <Link to="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank"> {translations.cookiesSection.content.cookiesPurpose.types[2].link}</Link> </p>



                <strong>{translations.cookiesSection.content.cookiesPurpose.types[3].type}</strong>
                <p>{translations.cookiesSection.content.cookiesPurpose.types[3].text}</p>

                <strong>{translations.cookiesSection.content.cookiesPurpose.types[4].type}</strong>
                <p>{translations.cookiesSection.content.cookiesPurpose.types[4].text}</p>
                <p>{translations.cookiesSection.content.cookiesPurpose.types[4].link_title} <strong><Link to="https://www.google.com/policies/privacy/"
                    target="_blank" rel="noopener noreferrer">{translations.cookiesSection.content.cookiesPurpose.types[4].link}</Link></strong> {translations.cookiesSection.content.cookiesPurpose.types[4].link_end}</p>


                <h2>{translations.cookiesSection.content.cookieManagement.title}</h2>
                <strong>{translations.cookiesSection.content.cookieManagement.consentWithdrawal.title}</strong>
                <p>{translations.cookiesSection.content.cookieManagement.consentWithdrawal.text}</p>



                <strong>{translations.cookiesSection.content.cookieManagement.browserSettings.title}</strong>
                <p>{translations.cookiesSection.content.cookieManagement.browserSettings.text}</p>
                <ul >
                    <li><strong><Link to="https://support.google.com/chrome/answer/95647?hl=hu" target="_blank"
                        rel="noopener noreferrer">Chrome</Link></strong></li>
                    <li><strong><Link to="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                        target="_blank" rel="noopener noreferrer">Firefox</Link> </strong></li>
                    <li><strong><Link
                        to="http://windows.microsoft.com/hu-hu/internet-explorer/delete-manage-cookies#ie=ie-11"
                        target="_blank" rel="noopener noreferrer">Microsoft Internet Explorer</Link> </strong></li>
                </ul>






                <strong>{translations.cookiesSection.content.googleAnalyticsDisable.title}</strong>
                <p>{translations.cookiesSection.content.googleAnalyticsDisable.text}</p>
                <p>{translations.cookiesSection.content.googleAnalyticsDisable.additionalInfo.description}</p>
                <p>{translations.cookiesSection.content.googleAnalyticsDisable.additionalInfo.links.text1} <a
                    href="http://www.google.com/intl/hu/policies/technologies/ads" target="_blank"
                    rel="noopener noreferrer">Link</a></p>
                <p>{translations.cookiesSection.content.googleAnalyticsDisable.additionalInfo.links.text2} <a
                    href="https://www.google.com/settings/ads/preferences" target="_blank"
                    rel="noopener noreferrer">Link</a></p>
                <p>{translations.cookiesSection.content.googleAnalyticsDisable.additionalInfo.links.text3} <a
                    href="https://support.google.com/analytics/answer/6004245" target="_blank"
                    rel="noopener noreferrer">Link</a></p>
            </div>
            <BackButton />
        </section>

    }



    return (
        <>
            {content}
        </>
    )
}

export default InfoPage