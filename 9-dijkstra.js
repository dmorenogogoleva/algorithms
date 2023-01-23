const DEFAULT_NUMBER = 10000000;

const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function findShortPart(graph, start, end) {
  const costs = {};
  const processed = [];
  let neighbours = {};

  // записываем доступные пути из первой ноды
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node] || DEFAULT_NUMBER;
      // записываем их вес в costs
      costs[node] = value;
    }
  });

  // находим ноду с самым малым весом
  let node = findNodeLowestCost(costs, processed);

  while (node) {
    const cost = costs[node];
    // доступные пути из самой маленбкой ноды
    neighbours = graph[node];

    // итерируемся по доступным путям
    Object.keys(neighbours).forEach((neighbour) => {
      // находим вес пути до следующих нод (складываем вес минимальной ноды с весами всех доступных путей)
      let newCost = cost + neighbours[neighbour];

      if (newCost < costs[neighbour]) {
        costs[neighbour] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }

  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = DEFAULT_NUMBER;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];

    if ((cost < lowestCost) & !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

const res = findShortPart(graph, "a", "g");
console.log("res:", res);
