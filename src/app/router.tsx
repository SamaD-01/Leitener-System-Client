import { createBrowserRouter, Outlet } from "react-router"
import AppLayout from "@/shared/components/layout/AppLayout"
import DashboardPage from "@/pages/dashboard/DashboardPage"
import ProtectedRoute from "@/shared/components/auth/ProtectedRoute"
import LoginPage from "@/pages/auth/LoginPage"
import CardFormPage from "@/pages/cards/CardFormPage"
import CardsPage from "@/pages/cards/CardsPage"
import QuizStartPage from "@/pages/quiz/QuizStartPage"
import QuizQuestionPage from "@/pages/quiz/QuizQuestionPage"
import QuizResultPage from "@/pages/quiz/QuizResultPage"
import { QuizProvider } from "@/features/quiz/context/QuizContext"
import SettingsPage from "@/pages/settings/SettingsPage"

export const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    {
        element: <ProtectedRoute />,
        children: [
        {
            element: <AppLayout />,
            children: [
                { path: "/", element: <DashboardPage /> },
                { path: "/cards", element: <CardsPage /> },
                { path: "/cards/new", element: <CardFormPage /> },
                {
                    path: "/quiz",
                    element: (
                        <QuizProvider>
                            <Outlet />
                        </QuizProvider>
                    ),
                    children: [
                        { index: true, element: <QuizStartPage /> },
                        { path: "play", element: <QuizQuestionPage /> },
                        { path: "result", element: <QuizResultPage /> }
                    ]
                },
                { path: "/settings", element: <SettingsPage /> }
            ]
        }
        ]
    }
])
