import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageOneComponent } from './components/pages/home-page-one/home-page-one.component';
import { HomePageTwoComponent } from './components/pages/home-page-two/home-page-two.component';
import { HomePageThreeComponent } from './components/pages/home-page-three/home-page-three.component';
import { HomePageFourComponent } from './components/pages/home-page-four/home-page-four.component';
import { HomePageFiveComponent } from './components/pages/home-page-five/home-page-five.component';
import { HomePageSixComponent } from './components/pages/home-page-six/home-page-six.component';
import { HomePageSevenComponent } from './components/pages/home-page-seven/home-page-seven.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { InstructorsPageOneComponent } from './components/pages/instructors-page-one/instructors-page-one.component';
import { InstructorsPageTwoComponent } from './components/pages/instructors-page-two/instructors-page-two.component';
import { InstructorsPageThreeComponent } from './components/pages/instructors-page-three/instructors-page-three.component';
import { InstructorsDetailsPageComponent } from './components/pages/instructors-details-page/instructors-details-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { PartnerPageComponent } from './components/pages/partner-page/partner-page.component';
import { LoginPageComponent } from './loginFolder/login-page/login-page.component';

import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogFullWidthPageComponent } from './components/pages/blog-full-width-page/blog-full-width-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { ShopGridPageComponent } from './components/pages/shop-grid-page/shop-grid-page.component';
import { ShopFullWidthPageComponent } from './components/pages/shop-full-width-page/shop-full-width-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CategoryPageOneComponent } from './components/pages/category-page-one/category-page-one.component';
import { CategoryPageTwoComponent } from './components/pages/category-page-two/category-page-two.component';
import { CategoryPageThreeComponent } from './components/pages/category-page-three/category-page-three.component';
import { CoursesListPageComponent } from './components/pages/courses-list-page/courses-list-page.component';
import { CoursesGridStyleOneColumnsTwoPageComponent } from './components/pages/courses-grid-style-one-columns-two-page/courses-grid-style-one-columns-two-page.component';
import { CoursesGridStyleOneColumnsThreePageComponent } from './components/pages/courses-grid-style-one-columns-three-page/courses-grid-style-one-columns-three-page.component';
import { CoursesGridStyleOneColumnsFourPageComponent } from './components/pages/courses-grid-style-one-columns-four-page/courses-grid-style-one-columns-four-page.component';
import { CoursesGridStyleTwoColumnsTwoPageComponent } from './components/pages/courses-grid-style-two-columns-two-page/courses-grid-style-two-columns-two-page.component';
import { CoursesGridStyleTwoColumnsThreePageComponent } from './components/pages/courses-grid-style-two-columns-three-page/courses-grid-style-two-columns-three-page.component';
import { CoursesGridStyleTwoColumnsFourPageComponent } from './components/pages/courses-grid-style-two-columns-four-page/courses-grid-style-two-columns-four-page.component';
import { CoursesGridStyleThreeColumnsFourPageComponent } from './components/pages/courses-grid-style-three-columns-four-page/courses-grid-style-three-columns-four-page.component';
import { CoursesGridStyleThreeColumnsThreePageComponent } from './components/pages/courses-grid-style-three-columns-three-page/courses-grid-style-three-columns-three-page.component';
import { CoursesGridStyleThreeColumnsTwoPageComponent } from './components/pages/courses-grid-style-three-columns-two-page/courses-grid-style-three-columns-two-page.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { MyDashboardPageComponent } from './components/pages/my-dashboard-page/my-dashboard-page.component';
import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';
import { DownloadsPageComponent } from './components/pages/downloads-page/downloads-page.component';
import { EditAddressPageComponent } from './components/pages/edit-address-page/edit-address-page.component';
import { EditAccountPageComponent } from './components/pages/edit-account-page/edit-account-page.component';
import { EditBillingAddressPageComponent } from './components/pages/edit-billing-address-page/edit-billing-address-page.component';
import { EditShippingAddressPageComponent } from './components/pages/edit-shipping-address-page/edit-shipping-address-page.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { Newsletter1Component } from './newsletter1/newsletter1.component';
import { LogoutComponent } from './logout/logout.component';
import { CandidateListComponent } from './BackEnd/candidate-list/candidate-list.component';
import { AdminComponent } from './admin/admin.component';

import { UpdateComponent } from './update/update.component';

import { RecruteurComponent } from './recruteur/recruteur.component';
import { AppComponent } from './app.component';
import { AppoComponent } from './BackEnd/recruteurAffichage/appo/appo.component';
import { RecruteurOneComponent } from './BackEnd/recruteurAffichage/recruteur-one/recruteur-one.component';
import { ProfilCandidateComponent } from './profil-candidate/profil-candidate.component';
import { AddInputComponent } from './add-input/add-input.component';
import { DeposerCvComponent } from './deposer-cv/deposer-cv.component';
import { UpdateRecruteurComponent } from './update-recruteur/update-recruteur.component';
import { TestChatbotComponent } from './test-chatbot/test-chatbot.component';
import { LoginsuccessComponent } from './loginFolder/loginsuccess/loginsuccess.component';
import { RegisterPageComponent } from './loginFolder/register-page/register-page';
import { RegisterComponent } from './authentif/register/register.component';
import { RegisterSuccessComponent } from './authentif/register-success/register-success.component';
import { LoginComponent } from './authentif/login/login.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { AuthGuard } from './auth.guard';
import { CandidateAffichComponent } from './candidate-affich/candidate-affich.component';
import { MonCompteComponent } from './UserProfil/mon-compte/mon-compte.component';
import { ListeOfCandidateComponent } from './liste-of-candidate/liste-of-candidate.component';
import { MonCVComponent } from './cv/mon-cv/mon-cv.component';
import { ListeOfRecruteurComponent } from './liste-of-recruteur/liste-of-recruteur.component';
import { AppSocketComponent } from './webSocket/app-socket/app-socket.component';
import { DevenirPartenaireComponent } from './devenir-partenaire/devenir-partenaire.component';
import { ListPartenairesComponent } from './list-partenaires/list-partenaires.component';
import { ActivationComponent } from './authentif/activation/activation.component';
import { Post1Component } from './post/post1/post1.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FormNotifComponent } from './form-notif/form-notif.component';
import { NotificationDetailComponent } from './form-notif/notification-detail/notification-detail.component';





 
const routes: Routes = [
    {path: '', component: HomePageOneComponent},
    {path: 'course-portal-online', component: HomePageTwoComponent},
    {path: 'distant-learning', component: HomePageThreeComponent},
    {path: 'modern-teaching', component: HomePageFourComponent},
    {path: 'assistanceTWE', component: HomePageFiveComponent},
    {path: 'form', component: FormNotifComponent},
    {path: 'form/:id', component: FormNotifComponent},
    {path: 'notification-detail/:id', component: NotificationDetailComponent},
    
    {path: 'newsletter1', component: Newsletter1Component},


    {path: 'uploadFile', component: UploadFileComponent},


    {path: 'test', component: TestChatbotComponent},

    {path: 'update-recruteur/:id', component: UpdateRecruteurComponent},
    
    {path: 'learning-school-online', component: HomePageSixComponent},
    {path: 'remote-training-online', component: HomePageSevenComponent},
    {path: 'about-style-1', component: AboutPageOneComponent},
    {path: 'about-style-2', component: AboutPageTwoComponent},
    {path: 'instructor-1', component: InstructorsPageOneComponent},
    {path: 'instructor-2', component: InstructorsPageTwoComponent},
    {path: 'instructor-3', component: InstructorsPageThreeComponent},
    {path: 'single-instructor', component: InstructorsDetailsPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'events', component: EventsPageComponent},
    {path: 'single-events', component: EventsDetailsPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'feedback', component: FeedbackPageComponent},
    {path: 'logout', component: LogoutComponent},




{path: 'input', component: AddInputComponent},


    {path: 'update-recruteur/:id', component: UpdateRecruteurComponent},
// {path: 'update-cand', component: UpdateComponent},
  
    {path: 'faqs', component: FaqPageComponent},
    {path: 'error-404', component: ErrorPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'courses-category-style-1', component: CategoryPageOneComponent},
    {path: 'courses-category-style-2', component: CategoryPageTwoComponent},
    {path: 'courses-category-style-3', component: CategoryPageThreeComponent},
    {path: 'courses-list', component: CoursesListPageComponent},
    {path: 'courses-2-columns-style-1', component: CoursesGridStyleOneColumnsTwoPageComponent},
    {path: 'courses-3-columns-style-1', component: CoursesGridStyleOneColumnsThreePageComponent},
    {path: 'courses-4-columns-style-1', component: CoursesGridStyleOneColumnsFourPageComponent},
    {path: 'courses-2-columns-style-2', component: CoursesGridStyleTwoColumnsTwoPageComponent},
    {path: 'courses-3-columns-style-2', component: CoursesGridStyleTwoColumnsThreePageComponent},
    {path: 'courses-4-columns-style-2', component: CoursesGridStyleTwoColumnsFourPageComponent},
    {path: 'courses-2-columns-style-3', component: CoursesGridStyleThreeColumnsTwoPageComponent},
    {path: 'courses-3-columns-style-3', component: CoursesGridStyleThreeColumnsThreePageComponent},
    {path: 'courses-4-columns-style-3', component: CoursesGridStyleThreeColumnsFourPageComponent},
    {path: 'single-courses', component: CoursesDetailsPageComponent},
    {path: 'my-dashboard', component: MyDashboardPageComponent},
    {path: 'orders', component: OrdersPageComponent},
    {path: 'downloads', component: DownloadsPageComponent},
    {path: 'edit-address', component: EditAddressPageComponent},

    /************************************************************************ */
    {path: 'deposer-cv', component: EditAccountPageComponent},
{path: 'monCv', component:MonCVComponent},

    {path:'monCompte/:id', component: DeposerCvComponent},

 
{path: 'appo', component: AppoComponent},
 

{ path: 'socket', component: AppSocketComponent},
//empty
{path: 'recruteurOne', component: RecruteurOneComponent},

{path: 'user/:id', component: ProfilCandidateComponent},

{path:'okk', component: CandidateAffichComponent},

{path:'up', component: UpdateComponent},

{path:'register', component: RegisterComponent},
{path:'register-success', component: RegisterSuccessComponent},

{path:'add-post', component: AddPostComponent, canActivate: [AuthGuard]},
{path:'blog', component: Post1Component},
{path:'post/:id', component: PostDetailsComponent},
{path: 'abc/:id', component: PartnerPageComponent},


/* liste of candidates */
{path:'okk', component: CandidateAffichComponent},

{path: 'loc', component:ListeOfCandidateComponent},
{path: 'lor', component:ListeOfRecruteurComponent},

{path: 'user/:id', component: ProfilCandidateComponent},

{path: 'partenaire', component: DevenirPartenaireComponent},

{path: 'list-partenaire', component: ListPartenairesComponent},

    {path: 'edit-billing-address', component: EditBillingAddressPageComponent},
    {path: 'edit-shipping-address', component: EditShippingAddressPageComponent},
    {path: 'blog-style-1', component: BlogGridPageComponent},
    {path: 'actualites', component: BlogRightSidebarPageComponent},
    {path: 'blog-style-3', component: BlogFullWidthPageComponent},
    {path: 'single-blog', component: BlogDetailsPageComponent},
    {path: 'shop-grid', component: ShopGridPageComponent},
    {path: 'shop-grid-fullwidth', component: ShopFullWidthPageComponent},
    {path: 'single-products', component: ProductsDetailsPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'contact', component: ContactPageComponent},

    {path: 'activation', component: ActivationComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'loginsuccess', component: LoginsuccessComponent},

    {path: 'login', component: LoginComponent},

    
    {path:'monCompte', component: DeposerCvComponent},

/**************** */
    {path: 'admin', component: AdminComponent},
{path: 'recruteur', component: RecruteurComponent},

{path:'chat', component: ChatDialogComponent},

{path: 'candidates', component: CandidateListComponent},

{path: 'user', component: LoginPageComponent},
{path:'myAccount', component: MonCompteComponent},




{path: '**', component: ErrorPageComponent},

    

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }