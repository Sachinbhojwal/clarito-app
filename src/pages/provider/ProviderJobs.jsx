import { useMemo, useState } from "react";

import JobsHeader from "../../components/provider/jobs/JobsHeader";
import JobsFilter from "../../components/provider/jobs/JobsFilter";
import JobsTable from "../../components/provider/jobs/JobsTable";
import JobDetailsModal from "../../components/provider/jobs/JobDetailsModal";

import { providerJobs } from "../../data/provider/providerJobs";

const ProviderJobs = () => {
  const [jobs, setJobs] =
    useState(providerJobs);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  const [selectedJob, setSelectedJob] =
    useState(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        job.customer.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        job.service
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchStatus =
        status === "All"
          ? true
          : job.status === status;

      return (
        matchSearch &&
        matchStatus
      );
    });
  }, [jobs, search, status]);

  const updateStatus = (
    id,
    newStatus
  ) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
            ...job,
            status: newStatus,
          }
          : job
      )
    );

    setSelectedJob((prev) =>
      prev
        ? {
          ...prev,
          status: newStatus,
        }
        : null
    );
  };

  return (
    <section className="space-y-8">
      <JobsHeader />

      <JobsFilter
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <JobsTable
        jobs={filteredJobs}
        onView={setSelectedJob}
      />

      {selectedJob && (
        <JobDetailsModal
          job={selectedJob}
          onClose={() =>
            setSelectedJob(null)
          }
          onAccept={(id) =>
            updateStatus(
              id,
              "Accepted"
            )
          }
          onReject={(id) =>
            updateStatus(
              id,
              "Rejected"
            )
          }
          onStart={(id) =>
            updateStatus(
              id,
              "In Progress"
            )
          }
          onComplete={(id) =>
            updateStatus(
              id,
              "Completed"
            )
          }
          onReceipt={() =>
            alert(
              "Receipt Download"
            )
          }
        />
      )}
    </section>
  );
};

export default ProviderJobs;