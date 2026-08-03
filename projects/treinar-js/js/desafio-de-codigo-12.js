/**
 * DESAFIO 12 - Gestão de Permissões com Map
 * Nível: Advanced
 */

// 1. Criando o dicionário de Roles
const userRoles = new Map();
userRoles.set("Joana", "SUDO");
userRoles.set("Marcos", "USER");
userRoles.set("Maria", "ADMIN");
userRoles.set("Roberto", "USER");
userRoles.set("Amanda", "ADMIN");

/**
 * Função para filtrar administradores
 * @param {Map} map - O mapa de usuários e cargos
 */
const getAdmins = (map) => {
  let admins = [];

  // Uso de Destructuring para clareza e Clean Code
  for (const [key, value] of map) {
    if (value === "ADMIN") {
      admins.push(key);
    }
  }

  return admins;
};

// Integrando com o motor NEXUS
window.main12 = (params) => {
  console.log(
    `%c[SYSTEM] Iniciando ${params}`,
    "color: #7aa2f7; font-weight: bold;",
  );

  // Executando a lógica do desafio
  const admins = getAdmins(userRoles);

  console.log("> Lista de Administradores identificada:");
  console.log(admins); // Exibe o array no terminal central

  return admins;
};
