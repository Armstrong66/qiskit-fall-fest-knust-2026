# Challenge 09: Quantum Chemistry --- H₂ Ground-State Energy

## Goal

Use a quantum computer simulator to estimate the ground-state energy of
the hydrogen molecule (H₂) and compare it with an exact classical
calculation.

## What you'll build

A small Python program that: 1. Defines an H₂ molecule at a chosen bond
distance. 2. Builds its electronic-structure Hamiltonian. 3. Maps the
fermionic Hamiltonian to qubits using the Jordan--Wigner mapping. 4.
Uses VQE (Variational Quantum Eigensolver) to estimate the ground-state
energy. 5. Compares the VQE result with exact diagonalization.

## Starter Lab Notebook

We have provided a fully interactive Jupyter notebook covering the complete workflow, including Pauli decompositions, hardware-efficient ansatz construction, COBYLA optimization trajectories, and dissociation curve plotting:
- **Notebook File:** [`workshops/02-quantum-circuits-algorithms/notebooks/intro_to_quantum_chemistry_vqe.ipynb`](../../workshops/02-quantum-circuits-algorithms/notebooks/intro_to_quantum_chemistry_vqe.ipynb) (or [`workshops/intro_to_quantum_chemistry_vqe.ipynb`](../../workshops/intro_to_quantum_chemistry_vqe.ipynb))
- Compatible with Google Colab and VS Code Jupyter.

## Tools

-   Python 3.10+
-   Qiskit (v1.x or v2.x)
-   SciPy and NumPy
-   Matplotlib

Install the packages in a virtual environment following [`qiskit_setup_guide_for_vs_code_jupyter.md`](../../qiskit_setup_guide_for_vs_code_jupyter.md).

## Core concepts

-   **Molecular Hamiltonian:** represents the electronic energy of the
    molecule.
-   **Qubit mapping:** converts the fermionic Hamiltonian into a qubit
    operator.
-   **VQE:** adjusts circuit parameters to minimize the expected energy.
-   **Ground state:** the lowest-energy state of the system.

## Tasks

-   [ ] Generate the H₂ Hamiltonian at a bond distance of 0.735 Å.
-   [ ] Map the Hamiltonian to qubits with Jordan--Wigner or Parity reduction.
-   [ ] Run VQE with a suitable ansatz and classical optimizer.
-   [ ] Compute the exact ground-state energy for comparison.
-   [ ] Report both energies and their absolute difference.

## Expected output

Print the VQE energy, exact energy, and absolute error in Hartree (Ha).
Your values should be close when the circuit, optimizer, and simulation
are configured correctly.

## Stretch goals

-   Plot the H₂ ground-state energy against several bond distances (Dissociation Curve).
-   Investigate how circuit depth affects the VQE result.
-   Simulate realistic quantum noise with `qiskit-aer` noise models.
-   Try the same workflow on lithium hydride (LiH) or helium hydride ($HeH^+$).

## Think about it

Why is the energy of bonded H₂ lower than the energy of two hydrogen
atoms infinitely far apart?

**Important:** This is a learning exercise. A successful simulation
demonstrates a quantum-chemistry workflow; it does not demonstrate
quantum advantage.

## Foundational Literature & Citations

- **The Origin of VQE:** Peruzzo, A., McClean, J., Shadbolt, P., et al. (2014). *A variational eigenvalue solver on a photonic quantum processor*. Nature Communications, 5, 4213. [DOI: 10.1038/ncomms5213](https://doi.org/10.1038/ncomms5213)
- **Definitive Quantum Chemistry Review:** Cao, Y., Romero, J., Olson, J. P., et al. (2019). *Quantum Chemistry in the Age of Quantum Computing*. Chemical Reviews, 119(19), 10856–10915. [DOI: 10.1021/acs.chemrev.8b00803](https://doi.org/10.1021/acs.chemrev.8b00803) | [arXiv:1812.09976](https://arxiv.org/abs/1812.09976)
- **Variational Quantum Algorithms Theory:** McClean, J. R., Romero, J., Babbush, R., & Aspuru-Guzik, A. (2016). *The theory of variational hybrid quantum-classical algorithms*. New Journal of Physics, 18(2), 023023. [DOI: 10.1088/1367-2630/18/2/023023](https://doi.org/10.1088/1367-2630/18/2/023023)
