import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Progress from './assets/router/Progress'; // Importe o componente Progress

const router = createBrowserRouter([
  {
    path: "progress",
    element: <Progress/>
  }
]);

const ErrorFallback = ({ error }) => (
  <div>
    <h1>Erro inesperado no aplicativo!</h1>
    <p>{error.message}</p>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erro capturado pelo ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ErrorBoundary>
  </React.StrictMode>
);




