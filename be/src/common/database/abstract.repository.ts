import { AbstractDocument } from './abstract.schema';
import { FilterQuery, Model, Types } from 'mongoose';

export class AbstractRepository<TDocument extends AbstractDocument> {
  constructor(private readonly model: Model<TDocument>) {}

  async createDocument(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    return (await createdDocument.save()).toJSON() as unknown as TDocument;
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    return this.model.findOne(filterQuery, {}, { lean: true });
  }
}
