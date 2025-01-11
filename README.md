# IlluVien - Graph-Based Editor for LLM Workflows

<p align="center">
  <a href="./README.md"><img alt="README in English" src="https://img.shields.io/badge/English-blue"></a>
  <a href="./README_CN.md"><img alt="简体中文版自述文件" src="https://img.shields.io/badge/简体中文-blue"></a>
  <a href="./README_JA.md"><img alt="日本語のREADME" src="https://img.shields.io/badge/日本語-blue"></a>
  <a href="./README_KR.md"><img alt="README in Korean" src="https://img.shields.io/badge/한국어-blue"></a>
  <a href="./README_DE.md"><img alt="Deutsche Version der README" src="https://img.shields.io/badge/Deutsch-blue"></a>
<a href="./README_FR.md"><img alt="Version française du README" src="https://img.shields.io/badge/Français-blue"></a>
<a href="./README_ES.md"><img alt="Versión en español del README" src="https://img.shields.io/badge/Español-blue"></a>
</p>

<p align="center">
  <a href="https://discord.gg/7Spn7C8A5F">
    <img alt="Join Our Discord" src="https://img.shields.io/badge/Discord-7289DA.svg?style=for-the-badge&logo=discord&logoColor=white">
  </a>
</p>

![](/assets/Hero.gif)
# ✨ Core Benefits

## Modular Building Blocks

![](/assets/Blocks.gif)

## Debug at Node Level:

![](/assets/Visualization.gif)

## Evaluate Final Performance

![](/assets/evals.gif)

## Coming soon: Self-improvement

![](/assets/Optimization.gif)

# 🕸️ Why IlluVien?

* **Easy-to-hack**, eg., one can add new workflow nodes by simply creating a single Python file.
* **JSON configs** of workflow graphs, enabling easy sharing and version control.
* **Lightweight** via minimal dependencies, avoiding bloated LLM frameworks.

# ⚡ Quick start 

You can launch IlluVien using pre-built docker images in the following steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Illuvien/illuvien.git
    cd IlluVien
    ```

2. **Create a .env file:**

    Create a `.env` file at the root of the project. You may use `.env.example` as a starting point.
    ```sh
    cp .env.example .env
    ```
    **Please go through the .env file and change configs wherver necessary**
    **If you plan to use third party model providers, please add their API keys in the .env file in this step**.

3. **Start the docker services:**

    ```sh
    docker compose -f ./docker-compose.prod.yml up --build -d
    ```

    This will start a local instance of IlluVien that will store spurs and other state information in a postgres database. A local postgres service is used by default. Override `POSTGRES_*` variables in the `.env` file to use an external postgres database.

4. **Access the portal:**

    Go to `http://localhost:6080/` in your browser.


Set up is completed. Click on "New Spur" to create a workflow, or start with one of the stock templates.


5. **[Optional] Manage your LLM provider keys from the app:**

   Once IlluVien app is running you can manage your LLM provider keys through the portal:

   Select API keys tab

   <img width="441" alt="image" src="https://github.com/user-attachments/assets/cccc7e27-c10b-4f3a-b818-3b65c55f4170" />

   Enter your provider's key and click save (save button will appear after you add/modify a key)

   <img width="451" alt="image" src="https://github.com/user-attachments/assets/e35ba2bb-4c60-4b13-9a8d-cc47cac45375" />


# 🛠️ IlluVien Development Setup
#### [ Instructions for development on Unix-like systems. Development on Windows/PC not tested ]

The steps for dev setup are same as above, except for step 3: we launch the app in the dev mode instead

3. **Start the docker services:**

    ```sh
    docker compose up --build -d
    ```

    This will start a local instance of IlluVien that will store spurs and other state information in a postgres database. A local postgres service is used by default. Override `POSTGRES_*` variables in the `.env` file to use an external postgres database.


# 🦙 Using IlluVien with Ollama (Local Models)

IlluVien can work with local models served using Ollama.

Steps to configure IlluVien to work with Ollama running on the same host.

### 1. Configure Ollama
To ensure Ollama API is reachable from IlluVien, we need to start the Ollama service with environment variable `OLLAMA_HOST=0.0.0.0` . This allows requests coming from IlluVien docker's bridge network to get through to Ollama. 
An easy way to do this is to launch the ollama service with the following command:
```sh
OLLAMA_HOST="0.0.0.0" ollama serve
```

### 2. Update the IlluVien .env file
Next up we need to update the `OLLAMA_BASE_URL` environment value in the `.env` file.
If your Ollama port is 11434 (the default port), then the entry in `.env` file should look like this:
```sh
OLLAMA_BASE_URL=http://host.docker.internal:11434 
```
(Please make sure that there is no trailing slash in the end!)

In IlluVien's set up, `host.docker.internal` refers to the host machine where both IlluVien and Ollama are running.

### 3. Launch the IlluVien app
Follow the usual steps to launch the IlluVien app, starting with the command:
```sh
docker compose -f docker-compose.prod.yml up --build -d
```

If you wish to do IlluVien development with ollama please run the following command instead of above:
```sh
docker compose -f docker-compose.yml up --build -d
```


### 4. Using Ollama models in the app
You will be able to select Ollama models [`ollama/llama3.2`, `ollama/llama3`, ...] from the sidebar for LLM nodes.
Please make sure the model you select is explicitly downloaded in ollama. That is, you will need to manually manage these models via ollama. To download a model you can simply run `ollama pull <model-name>`.

## Note on supported models
IlluVien only works with models that support structured-output and json mode. Most newer models should be good, but it would still be good to confirm this from Ollama documentation for the model you wish to use.

# ⭐ Support us

You can support us in our work by leaving a star! Thank you!


# 🗺️ Roadmap

- [X] Canvas
- [X] Async/Batch Execution
- [X] Evals
- [X] Spur API
- [x] Support Ollama
- [ ] New Nodes
    - [X] LLM Nodes
    - [X] If-Else
    - [X] Merge Branches
    - [ ] Tools
    - [ ] Loops
- [ ] RAG
- [ ] Pipeline optimization via DSPy and related methods
- [ ] Templates
- [ ] Compile Spurs to Code
- [ ] Multimodal support
- [ ] Containerization of Code Verifiers
- [ ] Leaderboard
- [ ] Generate Spurs via AI

Your feedback will be massively appreciated.
Please [tell us](mailto:founders@IlluVien.dev?subject=Feature%20Request&body=I%20want%20this%20feature%3Ai) which features on that list you like to see next or request entirely new ones.



