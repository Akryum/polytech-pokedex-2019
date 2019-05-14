export async function getPokemons (context) {
  return context.db.all(`
  SELECT id, display_name as name, habitat
  FROM pokemon_species
  ORDER BY id
  LIMIT 20
  `)
}

export async function getPokemonById (id, context) {
  // return context.db.get(`
  // SELECT id, display_name as name, habitat
  // FROM pokemon_species
  // WHERE id = ?
  // `, id)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        context.db.get(`
        SELECT id, display_name as name, habitat
        FROM pokemon_species
        WHERE id = ?
        `, id)
      )
    }, 500)
  })
}

export async function updatePokemon ({ id, habitat }, context) {
  await context.db.get(`
    UPDATE pokemon_species
    SET habitat = ?
    WHERE id = ?
  `, habitat, id)

  return getPokemonById(id, context)
}
