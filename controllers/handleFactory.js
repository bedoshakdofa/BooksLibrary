import ApiFeatuers from "../utils/ApiFeatuers.js";

export const Addfunction = (Model) => {
    return async (req, res) => {
        await Model.create(req.body);
        res.status(201).json({
            status: "success",
            message: "added successfully",
        });
    };
};

export const UpdateFunction = (Model) => {
    return async function (req, res) {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body);
        if (!doc)
            return res
                .status(404)
                .json({ status: "fail", message: "not found" });

        res.status(200).json({ status: "success", message: "updated" });
    };
};

export const DeleteFunction = (Model) => {
    return async (req, res) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc)
            return res
                .status(404)
                .json({ status: "fail", message: "not found" });

        res.status(200).json({
            status: "success",
            message: "deleted successfully",
        });
    };
};

export const GetByID = (Model) => {
    return async (req, res) => {
        const doc = await Model.findById(req.params.id);
        if (!doc)
            return res
                .status(404)
                .json({ status: "fail", message: "is not found" });
        res.status(200).json({
            status: "success",
            data: {
                doc,
            },
        });
    };
};

export const GetAll = (Model) => {
    return async (req, res) => {
        const featuers = new ApiFeatuers(Model, req.query)
            .pagination()
            .search();

        const Doc = await featuers;
        if (!Doc)
            return res
                .status(200)
                .json({ status: "fail", message: "not found " });

        res.status(200).json({
            status: "success",
            data: {
                Doc,
            },
        });
    };
};
