import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import LoadingPage from 'src/pages/loading';

import DashboardLayout from 'src/layouts/dashboard';
import UniversityView from 'src/sections/university/view/university-view';

export const Dashboard = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const Hello = lazy(() => import('src/pages/test'));
export const UploadFile = lazy(() => import('src/pages/uploadfile'));
export const CounterComponent = lazy(() => import('src/sections/test'));
export const Homepage = lazy(() => import('src/pages/homepage'));
export const Header = lazy(() => import('src/pages/header'));
export const News = lazy(() => import('src/pages/news'));
export const EventQuiz = lazy(() => import('src/pages/eventquiz'));
export const EditQuiz = lazy(() => import('src/pages/quizdetail'));
export const MyQuiz = lazy(() => import('src/pages/myquiz'));
export const NewsDetail = lazy(() => import('src/pages/newsdetail'));
export const Profile = lazy(() => import('src/pages/profile'));
export const Signin = lazy(() => import('src/pages/signin'));
export const HighSchoolView = lazy(() => import('src/pages/highschool'));
export const Logout = lazy(() => import('src/pages/logout'));
export const ConsultantView = lazy(() => import('src/pages/consultant'));
export const ConsultantLevelView = lazy(() => import('src/pages/consultantlevel'));
export const Transaction = lazy(() => import('src/pages/transaction'));
export const TransactionUniversityPage = lazy(() => import('src/pages/transactionuniversity'));
export const Wallet = lazy(() => import('src/pages/wallet'));
export const AdmissionInformationsPage = lazy(() => import('src/pages/admissionInformations'));
export const MajorPage = lazy(() => import('src/pages/major'));
export const OccupationPage = lazy(() => import('src/pages/occupation'));
export const AdmissionMethodPage = lazy(() => import('src/pages/admissionMethod'));
export const EntryLevelEducationPage = lazy(() => import('src/pages/entryLevelEducation'));
export const MajorCategoryPage = lazy(() => import('src/pages/majorCategory'));
export const OccupationalGroupPage = lazy(() => import('src/pages/occupationalGroup'));
export const WorkSkillPage = lazy(() => import('src/pages/workSkill'));
export const NewsForUniversity = lazy(() => import('src/pages/newsforUniversity'));
export const TransactionAdmin = lazy(() => import('src/pages/transactionAdmin'));
export const PaymentPage = lazy(() => import('src/pages/payment'));
export const SigninPayment = lazy(() => import('src/sections/payment/signinpayment'));
export const PaymentBegin = lazy(() => import('src/sections/payment/paymentbegin'));
export const PaymentSuccess = lazy(() => import('src/sections/payment/Success'));
export const Notification = lazy(() => import('src/pages/notification'));
export const ConsultantAccountView = lazy(() => import('src/sections/adminAccount/consultant/view/consultantaccount-view'));
export const HighSchoolAccountView = lazy(() => import('src/sections/adminAccount/highschool/view/highschoolaccount-view'));
export const UserAccountView = lazy(() => import('src/sections/adminAccount/user/view/userAccount-view'));
export const UniversityAccountView = lazy(() => import('src/sections/adminAccount/university/view/universityAccount-view'));
export const TestLesson = lazy(() => import('src/pages/testlesson'));
export const WithdrawalRequest = lazy(() => import('src/pages/withdrawalRequest'));

export const EmptyPage = lazy(() => import('src/pages/emptypage'));

// ----------------------------------------------------------------------

export default function Router() {
  let role = localStorage.getItem('role');
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<LoadingPage />}>
          <PaymentPage />
        </Suspense>
      ),
      index: true
    },

    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'payment',
      element: <PaymentPage />,
    },
    {
      path: 'signinpayment',
      element: < SigninPayment />,
    },
    {
      path: 'paymentbegin',
      element: < PaymentBegin />,
    },
    {
      path: "Payment/result",
      element: <PaymentSuccess />
    },
    {
      path: 'notification',
      element: <Notification />
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },


    {
      path: 'profile', element:
        (
          <Suspense fallback={<LoadingPage />}>
            <Profile />
          </Suspense>
        )
    },
  ]);
  return routes;
}
