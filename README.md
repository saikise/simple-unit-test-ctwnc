# How to Unit Test a Form Component with Cypress — Next.js 13 App Router, Complete, Step-by-step

[A Cypress version of the other tutorial — unit test with React Testing Library and Jest.](https://medium.com/@saikise/how-to-unit-test-form-component-with-react-testing-library-and-jest-next-js-complete-step-by-step-620867cf6a5f)


**Complete Step-by-step Tutorial**

1. [Read on Medium](https://medium.com/@saikise/how-to-unit-test-a-form-component-with-cypress-next-js-13-app-router-complete-step-by-step-988be63d9980)

**Series:**

1. [Code Tips on Medium](https://medium.com/@saikise/list/code-tips-6efbdbea4e03)

**Stack:**

1. [Next.js 13](https://nextjs.org/docs)
1. [SASS](https://sass-lang.com/)
1. [Cypress](https://www.cypress.io/)

**Preview**

| ![A whiteboard drawing of the Form component.](https://github.com/saikise/simple-unit-test-ctwnj/assets/134133636/cfb227e2-1deb-4830-b6d6-b1824badc86d) |
|:--:|
| *Drawing of the Form component annotated with my expectations.* |

| ![A screenshot showing all unit tests passed.](https://github.com/saikise/simple-unit-test-ctwnc/assets/134133636/9382153b-f2a2-41f0-b920-f6bdd13b47f5) |
|:--:|
| *A screenshot showing all expectations passed.* |

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed:

1. [GitHub CLI](https://cli.github.com/manual/installation)
1. [Node.js 16.8](https://nodejs.org/) or later.
1. macOS, Windows (including WSL), and Linux are supported.
1. [Prettier VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Installation

1. Create your GitHub repo using this project as template.

```bash
gh repo create <repo-name> --public --template=saikise/simple-unit-test-ctwnc
```

2. Install the dependencies listed in `package.json`.

```bash
npm i
```

3. Play with the app via development server.

```bash
npm run dev
```

4. Run the test script via Cypress Launchpad

```bash
npm run cypress:open
```
