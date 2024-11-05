const breadthFirstTraverse = (queue, array) => {
  // fill code in here

  while (queue.length > 0) {
    const l = queue.shift();
    if (l) {
      array.push(l.value);
      if (l.left) {
        queue.push(l.left);
      }
      if (l.right) {
        queue.push(l.right);
      }
    }
  }
  return array;
};

// unit tests
// do not modify the below code
describe("breadth-first tree traversal", function () {
  const answer = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

  const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null,
        },
        right: {
          value: "J",
          left: null,
          right: null,
        },
      },
      right: null,
    },
  };

  test("breadthFirstTraverse", () => {
    expect(breadthFirstTraverse([tree], [])).toEqual(answer);
  });
});
