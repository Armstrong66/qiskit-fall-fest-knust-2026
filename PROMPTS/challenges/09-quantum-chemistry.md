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

## Tools

-   Python 3.10+
-   Qiskit
-   Qiskit Nature
-   PySCF
-   NumPy and SciPy

Install the packages in a virtual environment. Check the current Qiskit
Nature and PySCF installation instructions if package versions conflict.

## Core concepts

-   **Molecular Hamiltonian:** represents the electronic energy of the
    molecule.
-   **Qubit mapping:** converts the fermionic Hamiltonian into a qubit
    operator.
-   **VQE:** adjusts circuit parameters to minimize the expected energy.
-   **Ground state:** the lowest-energy state of the system.

## Tasks

-   [ ] Generate the H₂ Hamiltonian at a bond distance of 0.735 Å.
-   [ ] Map the Hamiltonian to qubits with Jordan--Wigner.
-   [ ] Run VQE with a suitable ansatz and classical optimizer.
-   [ ] Compute the exact ground-state energy for comparison.
-   [ ] Report both energies and their absolute difference.

## Expected output

Print the VQE energy, exact energy, and absolute error in Hartree (Ha).
Your values should be close when the circuit, optimizer, and simulation
are configured correctly.

## Stretch goals

-   Plot the H₂ ground-state energy against several bond distances.
-   Investigate how circuit depth affects the VQE result.
-   Try the same workflow on lithium hydride (LiH).

## Think about it

Why is the energy of bonded H₂ lower than the energy of two hydrogen
atoms infinitely far apart?

**Important:** This is a learning exercise. A successful simulation
demonstrates a quantum-chemistry workflow; it does not demonstrate
quantum advantage.
