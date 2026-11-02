# Quantum GenAI Demo: A 2-Qubit Quantum Generator

**Audience:** Beginners\
**Estimated time:** 25--30 minutes\
**Platform:** Google Colab

## Goal

Build a tiny parameterized quantum circuit (PQC) that generates samples
resembling a two-mode probability distribution. Measurements should
produce mostly `00` and `11`, while suppressing `01` and `10`.

This is the distribution obtained by measuring the Bell state:

\[ \|`\Phi`{=tex}\^+`\rangle `{=tex}=
`\frac{|00\rangle + |11\rangle}{\sqrt{2}}`{=tex} \]

The demo connects quantum superposition and entanglement to generative
sampling. It is an educational toy example, not a practical image or
text generator.

## What you will build

A two-qubit circuit with trainable parameters. A classical optimizer
(COBYLA) adjusts those parameters to increase the probability of the
target outcomes `00` and `11`.

### Workflow

1.  Define the target distribution.
2.  Create a `TwoLocal` parameterized circuit.
3.  Add measurements and use a Qiskit Sampler.
4.  Evaluate how often the circuit produces `00` or `11`.
5.  Use COBYLA to tune the circuit parameters for about 20 iterations.
6.  Display the final measured distribution.

## Tools

-   Python 3
-   Google Colab
-   Qiskit
-   Qiskit Aer (if using its local simulator)
-   NumPy
-   Matplotlib

Install compatible package versions in a Colab cell. Qiskit primitive
APIs can differ between releases, so consult the current Qiskit
documentation if imports or interfaces differ.

## Suggested 25--30 minute plan

  -----------------------------------------------------------------------
  Time                                Activity
  ----------------------------------- -----------------------------------
  0--5 min                            Explain probability distributions,
                                      superposition and entanglement

  5--10 min                           Build and inspect the two-qubit PQC

  10--15 min                          Sample the circuit and inspect
                                      measurement counts

  15--23 min                          Optimize parameters with COBYLA
                                      (about 20 iterations)

  23--30 min                          Compare before/after distributions
                                      and discuss results
  -----------------------------------------------------------------------

A lightweight local simulator should make this a quick exercise, but
actual runtime depends on the environment, shots and implementation.

## Success criteria

-   Inspect the circuit's output distribution before optimization.
-   After optimization, `00` and `11` should account for most measured
    outcomes.
-   `01` and `10` should have relatively low probabilities.
-   Report the final probabilities and optimizer objective value.

Measurement results fluctuate with the number of shots and random seed.

## Questions to discuss

1.  What is the difference between a superposition and a classical
    mixture?
2.  Why does entanglement help produce correlated outcomes?
3.  What do the circuit parameters control?
4.  How does COBYLA improve the output distribution?
5.  Why is this a toy generative model rather than a general-purpose
    GenAI system?

## Important notes

-   A Bell-state generator produces `00` and `11` with equal
    probability.
-   The circuit is a small quantum sampler; it does not learn from a
    large training dataset.
-   Keep the demo focused on the circuit, sampling, objective function
    and optimization. Avoid heavyweight PyTorch--Qiskit hybrid training
    loops.
-   A 20-iteration run is a teaching demonstration, not evidence of
    quantum advantage.

**Deliverable:** A Colab notebook that displays the circuit, the
probability distribution before optimization, the optimized
distribution, and a short explanation of the results.
