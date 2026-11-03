# Getting Started with Qiskit in VS Code & Jupyter Notebooks

A simple, beginner-friendly guide to setting up Python, Visual Studio Code, and an isolated Qiskit environment on **Windows, macOS, or Linux**.

---

## 1. Prerequisites Checklist

Before running any quantum code, make sure you have:

1. **Visual Studio Code:** [Download VS Code](https://code.visualstudio.com/download)
2. **Python 3.10 – 3.12 (64-bit):** [Download Python](https://www.python.org/downloads/)
   * ⚠️ **Crucial for Windows users:** When running the installer, **check the box that says "Add python.exe to PATH"** before clicking "Install Now".

---

## 2. Configure VS Code Extensions

Open VS Code and install two official extensions from Microsoft:

1. Click the **Extensions** icon on the left sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for and install:
   * **Python** (by Microsoft)
   * **Jupyter** (by Microsoft)

---

## 3. Create Your Project & Virtual Environment

A virtual environment keeps your Qiskit packages isolated from other projects.

### Step A: Open Terminal and Create Folder

Open your computer's terminal (or inside VS Code: **Terminal → New Terminal**) and run:

```bash
mkdir qiskit-fallfest
cd qiskit-fallfest
```

### Step B: Create the Virtual Environment

Run the command for your operating system:

* **Windows (PowerShell):**
  ```powershell
  python -m venv .venv
  ```
  *(If `python` is not recognized, try `py -m venv .venv`)*

* **macOS / Linux:**
  ```bash
  python3 -m venv .venv
  ```

### Step C: Activate the Environment

* **Windows (PowerShell):**
  ```powershell
  .\.venv\Scripts\Activate.ps1
  ```
  > 💡 **Did you get a "Script Execution" error?**  
  > Run this command once in PowerShell:  
  > `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`  
  > Then run `.\.venv\Scripts\Activate.ps1` again.

* **macOS / Linux:**
  ```bash
  source .venv/bin/activate
  ```

When successfully activated, your terminal prompt will show `(.venv)` at the beginning of the line.

---

## 4. Install Qiskit & Simulation Tools

Upgrade `pip` and install Qiskit, the Aer local simulator, and visualization libraries in one step:

```bash
python -m pip install --upgrade pip
pip install "qiskit[visualization]" qiskit-aer jupyter ipykernel matplotlib pylatexenc
```

*Installation may take 2 to 4 minutes depending on your internet connection.*

---

## 5. Running Your First Notebook in VS Code

1. In VS Code, open your project folder: **File → Open Folder → `qiskit-fallfest`**.
2. Create a new file named `first_circuit.ipynb`.
3. Look at the top right of the notebook editor and click **Select Kernel**.
4. Choose **Python Environments...** and pick the one with `(.venv)` in its name.
5. In the first code cell, paste the following snippet and press `Shift + Enter` to run:

```python
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

# 1. Create a quantum circuit with 2 qubits and 2 classical bits
qc = QuantumCircuit(2, 2)
qc.h(0)         # Put qubit 0 into superposition
qc.cx(0, 1)     # Entangle qubit 0 and qubit 1 (Bell State)
qc.measure([0, 1], [0, 1])

# 2. Draw the circuit
print(qc.draw(output="text"))

# 3. Simulate measurement on AerSimulator
simulator = AerSimulator()
result = simulator.run(qc, shots=1000).result()
counts = result.get_counts()

print("\nMeasurement Results (1000 shots):", counts)
```

### Expected Output:
You will see a circuit diagram and counts distributed almost evenly between `'00'` and `'11'`:
```text
     ┌───┐     ┌─┐   
q_0: ┤ H ├──■──┤M├───
     └───┘┌─┴─┐└╥┘┌─┐
q_1: ─────┤ X ├─╫─┤M│
          └───┘ ║ └╥┘
c: 2/═══════════╩══╩═
                0  1 

Measurement Results (1000 shots): {'00': 508, '11': 492}
```

---

## 6. Common Troubleshooting

| Issue | Quick Fix |
| :--- | :--- |
| **`No module named 'qiskit'`** | Your notebook is using the global Python instead of `.venv`. Click **Select Kernel** in the top right corner of VS Code and choose `.venv`. |
| **`python` command not found (Windows)** | Python was installed without the PATH box checked. Re-run the installer, choose "Modify", and ensure "Add Python to environment variables" is ticked. |
| **PowerShell script execution disabled** | Open PowerShell and run: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`. |
| **Kernels list is blank in VS Code** | Press `Ctrl+Shift+P` (or `Cmd+Shift+P`), type `Python: Clear Cache and Reload Window`, and retry. |

---

## Daily Workflow Tip

Whenever you return to work on your projects:
1. Open the `qiskit-fallfest` folder in VS Code.
2. Open your `.ipynb` notebook.
3. Confirm the kernel in the top-right corner shows `Python 3.x (.venv)`.
4. You **do not** need to reinstall packages every time.