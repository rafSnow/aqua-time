import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// INSTRUÇÕES:
// 1. Copie este arquivo para 'firebaseConfig.ts'
// 2. Acesse https://console.firebase.google.com/
// 3. Vá em Configurações do Projeto > Seus apps
// 4. Adicione um app WEB (ícone </>)
// 5. Copie o objeto firebaseConfig e cole abaixo
// 6. O arquivo firebaseConfig.ts está no .gitignore e não será commitado

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxx"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar serviços
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
