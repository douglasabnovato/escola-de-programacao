/**
 * Valida um objeto de dados de usuário e constrói um objeto de perfil detalhado.
 * Demonstra uma função intencionalmente longa para fins de Sticky Scroll no VS Code.
 *
 * @param {object} userData - Dados brutos do usuário.
 * @returns {object|string} - Perfil do usuário formatado ou mensagem de erro.
 */
function validateAndBuildUserProfile(userData) {
  // Linha 1: Inicialização e validação inicial
  if (!userData || typeof userData !== "object") {
    return "Erro: Dados de usuário inválidos fornecidos.";
  }

  // Linha 6: Extração e limpeza de dados
  const name = typeof userData.name === "string" ? userData.name.trim() : "";
  const email =
    typeof userData.email === "string"
      ? userData.email.trim().toLowerCase()
      : "";
  const age =
    typeof userData.age === "number" && userData.age > 0
      ? Math.floor(userData.age)
      : null;
  const preferences = Array.isArray(userData.preferences)
    ? userData.preferences
    : [];

  // Linha 11: Múltiplas verificações de validação
  if (name.length < 2) {
    return "Erro: Nome deve ter pelo menos 2 caracteres.";
  }

  if (!email.includes("@") || !email.includes(".")) {
    return "Erro: Endereço de email inválido.";
  }

  if (age === null || age < 18) {
    // Esta é a linha 18, já passamos de 15 linhas de código efetivo
    return "Erro: Usuário deve ter pelo menos 18 anos.";
  }

  // Linha 21: Lógica de processamento adicional
  let status = "pending";
  if (userData.isActive === true) {
    status = "active";
  } else if (userData.isActive === false) {
    status = "inactive";
  }

  // Linha 28: Processamento de preferências (exemplo de loop)
  const formattedPreferences = preferences
    .map((pref) => {
      return typeof pref === "string" ? pref.toLowerCase() : null;
    })
    .filter((pref) => pref !== null);

  // Linha 33: Construção do objeto final
  const userProfile = {
    id: userData.id || Date.now().toString(),
    fullName: name,
    emailAddress: email,
    ageInYears: age,
    accountStatus: status,
    interests: formattedPreferences,
    createdAt: new Date().toISOString(),
  };

  // Linha 41: Registro final e retorno (mais de 20 linhas)
  console.log(
    "Perfil de usuário validado e construído com sucesso:",
    userProfile
  );
  return userProfile;
}

// Exemplo de uso do código:
const rawUserData = {
  name: " João Silva ",
  email: "JOAO.SILVA@EXAMPLE.COM",
  age: 25.5, // Será arredondado para 25
  isActive: true,
  preferences: ["GameS", "ProgramAcao", 123, "Musica"],
};

const userProfileResult = validateAndBuildUserProfile(rawUserData);
// Você verá o console log acima, mas o retorno é o objeto formatado.
