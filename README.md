# NuxtFire Storage Uploader

O NuxtFire Storage Uploader é um aplicativo web para upload de arquivos com integração ao Firebase Storage. Com este aplicativo, você pode fazer upload, gerenciar e compartilhar arquivos de forma eficiente e segura na nuvem.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Nuxt 3 instalados em seu ambiente de desenvolvimento.

## Configuração

1. Clone este repositório:

```bash
git clone https://github.com/gabrielcaiana/nuxt3-firebase-storage
```


### Configure as credenciais do Firebase:
- Crie um projeto no Firebase Console.
- Crie um arquivo .env na raiz do projeto e adicione suas credenciais do Firebase:

NUXT_PUBLIC_FIREBASE_API_KEY=seu-api-key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu-auth-domain
NUXT_PUBLIC_FIREBASE_PROJECT_ID=seu-project-id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu-sender-id
NUXT_PUBLIC_FIREBASE_APP_ID=seu-app-id

## Uso
Inicie o aplicativo localmente:

```bash
npm run dev
```

1. Abra o aplicativo em seu navegador em http://localhost:3000.
2. Faça o login com sua conta Firebase, se necessário.
3. Use a interface amigável para fazer upload de arquivos, gerenciá-los e gerar links compartilháveis.

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Abra uma issue ou envie uma pull request.

## Licença

Este projeto está licenciado sob a MIT License - consulte o arquivo LICENSE para obter detalhes.
