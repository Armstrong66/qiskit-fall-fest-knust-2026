# Workshop Sessions & Materials

This directory contains slide decks, Jupyter notebooks, and code samples for all Qiskit Fall Fest KNUST 2026 technical tracks.

## Sessions Overview

1. **[`01-intro-to-qiskit`](./01-intro-to-qiskit)**
   - Qubits, superposition, statevectors, and basic gates (X, H, CNOT).
   - Creating quantum circuits in Qiskit 1.x.

2. **[`02-quantum-circuits-algorithms`](./02-quantum-circuits-algorithms)**
   - Superdense coding, quantum teleportation, and Bell state analysis.
   - Variational Quantum Eigensolvers (VQE) and Cloud execution with IBM Quantum primitives.

## Interactive Workshop Notebooks

- **[`intro_to_quantum_chemistry_vqe.ipynb`](./02-quantum-circuits-algorithms/notebooks/intro_to_quantum_chemistry_vqe.ipynb)** (also directly accessible at [`workshops/intro_to_quantum_chemistry_vqe.ipynb`](./intro_to_quantum_chemistry_vqe.ipynb)):
  - Ground-state energy simulation of molecular hydrogen ($H_2$) using Qiskit.
  - Molecular orbital reduction, Hamiltonian Pauli representation, and hardware-efficient ansatz design.
  - Dual-panel VQE convergence analysis and chemical accuracy ($1.6\text{ mHa}$) evaluation.
  - Potential Energy Surface (PES) dissociation curve mapping with equilibrium bond detection ($R \approx 0.74\text{ \AA}$).
  - Full execution support for Google Colab (one-click badge included) and VS Code Jupyter.

## Environment Setup
Recommended Python 3.10+ virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install qiskit qiskit-ibm-runtime matplotlib jupyterlab
```
