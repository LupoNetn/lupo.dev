# THE SYSTEMS ARCHITECT MANIFESTO

## Roadmap to Becoming a "Cracked" Systems Engineer

This document serves as your operational manual for bridging the gap between a web developer and a systems architect. Focus on high-leverage knowledge and building infrastructure.

---

### PHASE 1: THE FOUNDATIONS (Months 1-3)

_Goal: Understand the "Ground Truth" of how computers actually execute your code

1.  **Operating Systems (The Environment)**:
    - **Process vs Thread**: Deeply understand multitasking, context switching, and scheduling.
    - **Memory Management**: Learn how heap vs stack works. Understand virtual memory and page faults.
    - **I/O Models**: Learn the difference between Blocking, Non-blocking, and Asynchronous I/O (epoll, kqueue).
    - **Activity**: Install a headless Linux distro (Arch or Debian) and manage it entirely via the CLI

2.  **Computer Networking (The Fabric)**:
    - **OSI Model**: Move beyond HTTP. Understand TCP flow control, congestion avoidance, and UDP's trade-offs.
    - **TLS/SSL**: Learn how the handshake works. Understand certificates and encryption at rest/transit.
    - **Activity**: Use `tcpdump` or Wireshark to inspect the packets of your own local API.

---

### PHASE 2: SYSTEMS ARCHITECTURE (Months 4-8)

_Goal: Learn to design systems that don't fall over when 100k people use them._

1.  **Distributed Systems Theory**:
    - **CAP Theorem**: Consistency, Availability, Partition Tolerance. Know why you can't have all three.
    - **PACELC**: An extension of CAP for latency/consistency trade-offs.
    - **Consensus Protocols**: Understand the "vibes" of Raft or Paxos (how computers agree on things).
    - **Core Reading**: _Designing Data-Intensive Applications (DDIA)_ by Martin Kleppmann. This is the only "must-read" book.

2.  **Database Internals**:
    - **Storage Engines**: Research B-Trees vs LSM-Trees.
    - **Indexing**: Learn how GIN, B-tree, and Hash indexes work.
    - **Transactions**: Master ACID and transaction isolation levels (Read Committed, Serializable).

---

### PHASE 3: THE "CRACKED" TOOLKIT (Months 9-12)

_Goal: Master your primary runtime (Go/Node) and infrastructure tools._

1.  **Advanced Go (Systems Language)**:
    - **The Runtime**: Study the G-M-P scheduler model.
    - **Memory**: Understand the Garbage Collector (GC) pacing and how to reduce allocations.
    - **Concurrency**: Master `sync.WaitGroup`, `errgroup`, and `mutex` vs `RWMutex`.

2.  **Infrastructure & Observability**:
    - **Containers**: Don't just "use" Docker. Understand Cgroups and Namespaces.
    - **The Golden Signals**: Learn to monitor Latency, Traffic, Errors, and Saturation.
    - **OpenTelemetry**: Implement tracing to see exactly where a request slows down across multiple services.

---

### PHASE 4: THE "CRACKED" PROJECTS (Build Infrastructure)

_Don't build apps. Build the things that apps run on._

1.  **The KV Store**: Write a disk-persistent Key-Value store in Go (use `mmap` if you're feeling brave).
2.  **The Load Balancer**: Write a Layer 4 (TCP) load balancer with health checks.
3.  **The Redis Clone**: Re-implement a handful of Redis commands (SET, GET, EXPIRE) with a custom wire protocol.
4.  **The BitTorrent Client**: Build a basic client. It’s the best way to learn networking and concurrency.

---

### MENTALITY & HABITS

- **Read the Source**: If you use a library and it feels like "magic," go to its GitHub and read the code.
- **Avoid "Cargo Culting"**: Never use a tool because it's popular. Use it because you understand exactly which problem it solves.
- **Seniority is Reliability**: A senior engineer is someone who thinks about what happens when things BREAK (timeouts, retries, circuit breakers).
- **Write for Humans**: "Cracked" engineers write simple code for complex problems, not complex code for simple problems.

---

**Current Status**: INITIALIZED
**Target**: SYSTEMS ARCHITECT
**Protocol**: JUST KEEP BUILDING.
