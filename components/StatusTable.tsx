type Row = {
  label: string;
  status: string;
  note: string;
};

export default function StatusTable({ rows }: { rows: Row[] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td><strong>{row.label}</strong></td>
              <td>{row.status}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
