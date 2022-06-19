import { cpus } from "os";
import cluster from "cluster";

const multiBalancer = async () => {
  if (cluster.isPrimary) {
    const cpuList = cpus();

    (cpuList || []).forEach(() => {
      cluster.fork();
    });
    console.log("cpu list", cpuList);
  } else {
    const id = cluster && cluster.worker && cluster.worker.id;
    await import("./index.js");
    console.log(`cluster number ${id}`);
  }
};

multiBalancer();
